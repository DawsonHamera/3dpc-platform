import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, task_type } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { GenerateOrderTasksDto } from './dto/generate-order-tasks.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

type CreateOrderItemPayload = {
  productId: number;
  variantId: number;
  quantity: number;
};

type GeneratedTask = Prisma.taskGetPayload<{
  include: {
    assigned_user: true;
    order_item: {
      include: {
        order: true;
        product: true;
        product_variant: true;
      };
    };
  };
}>;

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  findAllOrders(status?: string, limit?: number, order?: string) {
    const statusFilter = this.buildOrderStatusFilter(status);

    return this.prisma.order.findMany({
      orderBy: { created_at: order === 'asc' ? 'asc' : 'desc' },
      where: {
        status: statusFilter,
      },
      take: limit,
    });
  }

  findOrderById(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        order_items: {
          include: {
            product: true,
            product_variant: true,
          },
        },
      },
    });
  }

  async findOrderByKey(key: string) {
    const order = await this.prisma.order.findUnique({
      where: { key },
      include: {
        order_items: {
          include: {
            product: true,
            product_variant: {
              include: { image: true },
            },
          },
        },
      },
    });

    if (!order) {
      throw new InternalServerErrorException('Order not found');
    }

    return order;
  }

  async createOrder(data: CreateOrderDto) {
    const orderData: Prisma.orderCreateInput = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      delivery_method: data.delivery_method,
      total_price: data.total_price,
      status: 'pending',
      key: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };

    try {
      return await this.prisma.$transaction(async (tx) => {
        const order = await tx.order.create({ data: orderData });

        await tx.order_item.createMany({
          data: data.cart.map((item: CreateOrderItemPayload) => ({
            order_id: order.id,
            product_id: item.productId,
            product_variant_id: item.variantId,
            quantity: item.quantity,
          })),
        });

        return order;
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to create order and order items: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }
  }

  updateOrder(id: number, data: Record<string, unknown>) {
    return this.prisma.order.update({ where: { id }, data });
  }

  deleteOrder(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }

  findOrderItems(orderId: number) {
    return this.prisma.order_item.findMany({
      where: { order_id: orderId },
      include: {
        product: true,
        product_variant: { include: { image: true } },
        tasks: {
          where: { type: task_type.print_job },
          select: {
            id: true,
            title: true,
            status: true,
            assigned_to: true,
            scheduled_date: true,
          },
        },
      },
    });
  }

  addOrderItem(orderId: number, data: CreateOrderItemDto) {
    return this.prisma.order_item.create({
      data: {
        product_id: data.product_id,
        product_variant_id: data.product_variant_id,
        quantity: data.quantity,
        status: data.status,
        order_id: orderId,
      },
    });
  }

  async updateOrderItem(
    orderId: number,
    itemId: number,
    data: UpdateOrderItemDto,
  ) {
    const existingItem = await this.prisma.order_item.findFirst({
      where: { id: itemId, order_id: orderId },
      select: { id: true },
    });

    if (!existingItem) {
      throw new NotFoundException('Order item not found for order');
    }

    return this.prisma.order_item.update({
      where: { id: itemId },
      data: {
        product_id: data.product_id,
        product_variant_id: data.product_variant_id,
        quantity: data.quantity,
        status: data.status,
      },
    });
  }

  async deleteOrderItem(orderId: number, itemId: number) {
    const deleteResult = await this.prisma.order_item.deleteMany({
      where: { id: itemId, order_id: orderId },
    });

    if (deleteResult.count === 0) {
      throw new NotFoundException('Order item not found for order');
    }

    return { success: true };
  }

  async generateTasksFromOrder(
    orderId: number,
    options?: GenerateOrderTasksDto,
  ) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        order_items: {
          include: {
            product: true,
            product_variant: true,
            tasks: {
              where: { type: task_type.print_job },
              select: { id: true },
            },
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const existingTaskByOrderItemId = new Set<number>(
      order.order_items
        .filter((item) => item.tasks.length > 0)
        .map((item) => item.id),
    );

    const orderItemsWithoutTasks = order.order_items.filter(
      (item) => options?.force || !existingTaskByOrderItemId.has(item.id),
    );

    if (orderItemsWithoutTasks.length === 0) {
      return {
        order_id: order.id,
        created_count: 0,
        skipped_count: order.order_items.length,
        eligible_item_count: 0,
        already_linked_item_count: order.order_items.length,
      };
    }

    const printerAssignmentByOrderItemId = new Map<number, number>(
      (options?.printer_assignments ?? []).map((assignment) => [
        assignment.order_item_id,
        assignment.printer_id,
      ]),
    );

    const missingPrinterAssignments = orderItemsWithoutTasks
      .map((item) => item.id)
      .filter(
        (orderItemId) => !printerAssignmentByOrderItemId.has(orderItemId),
      );

    if (missingPrinterAssignments.length > 0) {
      throw new BadRequestException(
        `Printer assignments are required for order items: ${missingPrinterAssignments.join(', ')}`,
      );
    }

    const createdTasks = await this.prisma.$transaction(async (tx) => {
      const tasks: GeneratedTask[] = [];

      const selectedPrinterIds = Array.from(
        new Set(
          orderItemsWithoutTasks
            .map((item) => printerAssignmentByOrderItemId.get(item.id))
            .filter(
              (printerId): printerId is number => typeof printerId === 'number',
            ),
        ),
      );

      const printers =
        selectedPrinterIds.length > 0
          ? await tx.printer.findMany({
              where: { id: { in: selectedPrinterIds } },
              select: { id: true, loaded_material_id: true },
            })
          : [];

      const printerById = new Map(
        printers.map((printer) => [printer.id, printer]),
      );

      const missingPrinters = selectedPrinterIds.filter(
        (printerId) => !printerById.has(printerId),
      );

      if (missingPrinters.length > 0) {
        throw new BadRequestException(
          `Invalid printer selection: ${missingPrinters.join(', ')}`,
        );
      }

      const variantModelFileIds = Array.from(
        new Set(
          orderItemsWithoutTasks
            .map((item) => item.product_variant.model_file_id)
            .filter(
              (modelFileId): modelFileId is number =>
                typeof modelFileId === 'number',
            ),
        ),
      );

      const modelsByFileId = new Map<number, number>();
      if (variantModelFileIds.length > 0) {
        const models = await tx.model.findMany({
          where: { file_id: { in: variantModelFileIds } },
          select: { id: true, file_id: true },
        });
        for (const model of models) {
          if (!modelsByFileId.has(model.file_id)) {
            modelsByFileId.set(model.file_id, model.id);
          }
        }
      }

      const availableMaterials = await tx.material.findMany({
        select: { id: true, color: true },
      });

      for (const item of orderItemsWithoutTasks) {
        try {
          const printerId = printerAssignmentByOrderItemId.get(item.id);

          if (!printerId) {
            throw new BadRequestException(
              `Missing printer selection for order item ${item.id}`,
            );
          }

          const selectedPrinter = printerById.get(printerId);

          if (!selectedPrinter) {
            throw new BadRequestException(
              `Invalid printer selection for order item ${item.id}`,
            );
          }

          const inferredModelId =
            item.product_variant.model_file_id &&
            modelsByFileId.has(item.product_variant.model_file_id)
              ? modelsByFileId.get(item.product_variant.model_file_id)
              : null;

          const inferredMaterialId = this.inferMaterialIdFromVariant(
            item.product_variant,
            availableMaterials,
            selectedPrinter.loaded_material_id,
          );

          const task = await tx.task.create({
            data: {
              title: `Print ${item.product.name} (${item.product_variant.name}) x${item.quantity}`,
              type: task_type.print_job,
              details: {
                orderId: order.id,
                orderItemId: item.id,
                productId: item.product_id,
                productVariantId: item.product_variant_id,
                quantity: item.quantity,
                printer_id: printerId,
                model_id: inferredModelId,
                material_id: inferredMaterialId,
                generatedFromOrder: true,
              },
              order_item: {
                connect: { id: item.id },
              },
            },
            include: {
              assigned_user: true,
              order_item: {
                include: {
                  order: true,
                  product: true,
                  product_variant: true,
                },
              },
            },
          });
          tasks.push(task);
        } catch (error) {
          if (this.isUniqueConstraintViolation(error)) {
            continue;
          }
          throw error;
        }
      }

      if (tasks.length > 0) {
        await tx.order.update({
          where: { id: order.id },
          data: {
            status: 'in_progress',
          },
        });
      }

      return tasks;
    });

    return {
      order_id: order.id,
      created_count: createdTasks.length,
      skipped_count: order.order_items.length - createdTasks.length,
      eligible_item_count: orderItemsWithoutTasks.length,
      already_linked_item_count:
        order.order_items.length - orderItemsWithoutTasks.length,
      tasks: createdTasks,
    };
  }

  private inferMaterialIdFromVariant(
    variant: { color: string | null; customizations: Prisma.JsonValue | null },
    materials: Array<{ id: number; color: string | null }>,
    fallbackMaterialId: number | null,
  ): number | null {
    const customizations = this.asRecord(variant.customizations);
    const explicitMaterialId =
      this.toPositiveInt(customizations.material_id) ??
      this.toPositiveInt(customizations.materialId);

    if (
      explicitMaterialId &&
      materials.some((material) => material.id === explicitMaterialId)
    ) {
      return explicitMaterialId;
    }

    if (variant.color) {
      const normalizedVariantColor = variant.color.trim().toLowerCase();
      const colorMatch = materials.find(
        (material) =>
          typeof material.color === 'string' &&
          material.color.trim().toLowerCase() === normalizedVariantColor,
      );

      if (colorMatch) {
        return colorMatch.id;
      }
    }

    return fallbackMaterialId ?? null;
  }

  private asRecord(value: Prisma.JsonValue | null): Record<string, unknown> {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return {};
    }

    return value as Record<string, unknown>;
  }

  private toPositiveInt(value: unknown): number | null {
    if (typeof value === 'number' && Number.isInteger(value) && value > 0) {
      return value;
    }

    if (typeof value === 'string') {
      const parsed = Number(value);
      if (Number.isInteger(parsed) && parsed > 0) {
        return parsed;
      }
    }

    return null;
  }

  private buildOrderStatusFilter(
    status?: string,
  ): Prisma.StringFilter | undefined {
    if (!status) {
      return undefined;
    }

    const normalized = status.toLowerCase();

    switch (normalized) {
      case 'processing':
      case 'in_progress':
        return { in: ['processing', 'in_progress'] };
      case 'cancelled':
      case 'failed':
        return { in: ['cancelled', 'failed'] };
      default:
        return { equals: status };
    }
  }

  private isUniqueConstraintViolation(error: unknown): boolean {
    if (
      !error ||
      typeof error !== 'object' ||
      !('code' in error) ||
      typeof error.code !== 'string'
    ) {
      return false;
    }

    return error.code === 'P2002';
  }
}
