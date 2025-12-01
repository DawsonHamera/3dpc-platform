"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let OrdersService = class OrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllOrders() {
        return this.prisma.order.findMany();
    }
    findOrderById(id) {
        return this.prisma.order.findUnique({ where: { id } });
    }
    createOrder(data) {
        return this.prisma.order.create({ data });
    }
    updateOrder(id, data) {
        return this.prisma.order.update({ where: { id }, data });
    }
    deleteOrder(id) {
        return this.prisma.order.delete({ where: { id } });
    }
    findOrderItems(orderId) {
        return this.prisma.order_item.findMany({ where: { order_id: orderId } });
    }
    addOrderItem(orderId, data) {
        return this.prisma.order_item.create({
            data: {
                ...data,
                order_id: orderId,
            },
        });
    }
    updateOrderItem(orderId, itemId, data) {
        return this.prisma.order_item.update({
            where: { id: itemId },
            data: { ...data, order_id: orderId },
        });
    }
    deleteOrderItem(orderId, itemId) {
        return this.prisma.order_item.delete({ where: { id: itemId } });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map