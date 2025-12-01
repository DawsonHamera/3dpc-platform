import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  findAllOrders() {
    return this.prisma.order.findMany();
  }

  findOrderById(id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  createOrder(data: any) {
    return this.prisma.order.create({ data });
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
