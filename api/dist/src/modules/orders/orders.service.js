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
        return this.prisma.order.findMany({
            include: { order_items: true },
        });
    }
    findOrderById(id) {
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
    async findOrderByKey(key) {
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
            throw new common_1.InternalServerErrorException('Order not found');
        }
        return order;
    }
    async createOrder(data) {
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
            throw new common_1.InternalServerErrorException('Failed to create order');
        }
        try {
            data.cart.forEach(async (item) => {
                await this.prisma.order_item.create({
                    data: {
                        order_id: order.id,
                        product_id: item.productId,
                        product_variant_id: item.variantId,
                        quantity: item.quantity,
                    },
                });
            });
        }
        catch (error) {
            await this.prisma.order.delete({ where: { id: order.id } });
            console.log(error);
            throw new common_1.InternalServerErrorException('Failed to create order items, rolled back order creation: ' +
                error.message);
        }
        return order;
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