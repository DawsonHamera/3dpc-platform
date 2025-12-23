import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        full_name: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findItems(orderId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        quantity: number;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    addItem(orderId: string, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        quantity: number;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateItem(orderId: string, itemId: string, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        quantity: number;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    removeItem(orderId: string, itemId: string): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        quantity: number;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
