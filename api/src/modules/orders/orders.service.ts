import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  findAllOrders(status?: string, limit?: number, order?: string) {
    return this.prisma.order.findMany({
      orderBy: { created_at: order === 'asc' ? 'asc' : 'desc' },
      where: {
        status: status ? { equals: status } : undefined,
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

  async createOrder(data: any) {
    const orderData = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      delivery_method: data.delivery_method,
      total_price: data.total_price,
      status: 'pending',
      key: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };

    const order = await this.prisma.order.create({ data: orderData });

    if (!order) {
      throw new InternalServerErrorException('Failed to create order');
    }

    try {
      data.cart.forEach(async (item: any) => {
        await this.prisma.order_item.create({
          data: {
            order_id: order.id,
            product_id: item.productId,
            product_variant_id: item.variantId,
            quantity: item.quantity,
          },
        });
      });
    } catch (error) {
      await this.prisma.order.delete({ where: { id: order.id } });
      console.log(error);
      throw new InternalServerErrorException(
        'Failed to create order items, rolled back order creation: ' +
          error.message,
      );
    }

    return order;
  }

  updateOrder(id: number, data: any) {
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
      },
    });
  }

  addOrderItem(orderId: number, data: any) {
    return this.prisma.order_item.create({
      data: {
        ...data,
        order_id: orderId,
      },
    });
  }

  updateOrderItem(orderId: number, itemId: number, data: any) {
    return this.prisma.order_item.update({
      where: { id: itemId },
      data: { ...data, order_id: orderId },
    });
  }

  deleteOrderItem(orderId: number, itemId: number) {
    return this.prisma.order_item.delete({ where: { id: itemId } });
  }
}
