import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { success } from 'src/utils/response';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  findAllOrders() {
    return this.prisma.order.findMany({
      include: { order_items: true },
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

  findOrderByKey(key: string) {
    return this.prisma.order.findUnique({
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
  }

  async createOrder(data: any) {
    const orderData = {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      delivery_method: data.deliveryMethod,
      total_price: data.totalPrice,
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
    return this.prisma.order_item.findMany({ where: { order_id: orderId } });
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
