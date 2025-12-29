import { PrismaService } from '../../prisma/prisma.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllOrders(): import("@prisma/client").Prisma.PrismaPromise<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOrderById(id: number): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createOrder(data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateOrder(id: number, data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteOrder(id: number): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOrderItems(orderId: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        quantity: number;
        product_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
        order_id: number;
        product_variant_id: number;
    }[]>;
    addOrderItem(orderId: number, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        quantity: number;
        product_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateOrderItem(orderId: number, itemId: number, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        quantity: number;
        product_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteOrderItem(orderId: number, itemId: number): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        quantity: number;
        product_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
