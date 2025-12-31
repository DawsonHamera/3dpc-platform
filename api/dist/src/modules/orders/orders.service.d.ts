import { PrismaService } from '../../prisma/prisma.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllOrders(): import("@prisma/client").Prisma.PrismaPromise<({
        order_items: {
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            status: string;
            quantity: number;
            product_id: number;
            order_id: number;
            product_variant_id: number;
        }[];
    } & {
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        key: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    findOrderById(id: number): import("@prisma/client").Prisma.Prisma__orderClient<({
        order_items: ({
            product: {
                name: string;
                created_at: Date | null;
                updated_at: Date | null;
                id: number;
                description: string | null;
            };
            product_variant: {
                name: string;
                created_at: Date | null;
                updated_at: Date | null;
                id: number;
                image_file_id: number | null;
                type: import("@prisma/client").$Enums.product_variant_type;
                color: string | null;
                product_id: number;
                background_color: string | null;
                price: number;
                customizations: import("@prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            status: string;
            quantity: number;
            product_id: number;
            order_id: number;
            product_variant_id: number;
        })[];
    } & {
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        key: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOrderByKey(key: string): Promise<{
        order_items: ({
            product: {
                name: string;
                created_at: Date | null;
                updated_at: Date | null;
                id: number;
                description: string | null;
            };
            product_variant: {
                image: {
                    path: string;
                    created_at: Date | null;
                    updated_at: Date | null;
                    deleted_at: Date | null;
                    id: number;
                    description: string | null;
                    type: import("@prisma/client").$Enums.file_type;
                    original_name: string;
                    stored_name: string;
                    mime_type: string | null;
                    size: number;
                    uploaded_by: number | null;
                } | null;
            } & {
                name: string;
                created_at: Date | null;
                updated_at: Date | null;
                id: number;
                image_file_id: number | null;
                type: import("@prisma/client").$Enums.product_variant_type;
                color: string | null;
                product_id: number;
                background_color: string | null;
                price: number;
                customizations: import("@prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            status: string;
            quantity: number;
            product_id: number;
            order_id: number;
            product_variant_id: number;
        })[];
    } & {
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        key: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }>;
    createOrder(data: any): Promise<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        key: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }>;
    updateOrder(id: number, data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        key: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteOrder(id: number): import("@prisma/client").Prisma.Prisma__orderClient<{
        email: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        key: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOrderItems(orderId: number): import("@prisma/client").Prisma.PrismaPromise<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        quantity: number;
        product_id: number;
        order_id: number;
        product_variant_id: number;
    }[]>;
    addOrderItem(orderId: number, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        quantity: number;
        product_id: number;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateOrderItem(orderId: number, itemId: number, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        quantity: number;
        product_id: number;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteOrderItem(orderId: number, itemId: number): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        quantity: number;
        product_id: number;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
