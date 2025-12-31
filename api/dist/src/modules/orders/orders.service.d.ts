import { PrismaService } from '../../prisma/prisma.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllOrders(): import("@prisma/client").Prisma.PrismaPromise<({
        order_items: {
            id: number;
            status: string;
            created_at: Date | null;
            updated_at: Date | null;
            order_id: number;
            product_id: number;
            product_variant_id: number;
            quantity: number;
        }[];
    } & {
        id: number;
        key: string;
        email: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
    })[]>;
    findOrderById(id: number): import("@prisma/client").Prisma.Prisma__orderClient<({
        order_items: ({
            product: {
                id: number;
                created_at: Date | null;
                updated_at: Date | null;
                name: string;
                description: string | null;
            };
            product_variant: {
                id: number;
                created_at: Date | null;
                updated_at: Date | null;
                name: string;
                product_id: number;
                type: import("@prisma/client").$Enums.product_variant_type;
                image_file_id: number | null;
                color: string | null;
                background_color: string | null;
                price: number;
                customizations: import("@prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            id: number;
            status: string;
            created_at: Date | null;
            updated_at: Date | null;
            order_id: number;
            product_id: number;
            product_variant_id: number;
            quantity: number;
        })[];
    } & {
        id: number;
        key: string;
        email: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOrderByKey(key: string): import("@prisma/client").Prisma.Prisma__orderClient<({
        order_items: ({
            product: {
                id: number;
                created_at: Date | null;
                updated_at: Date | null;
                name: string;
                description: string | null;
            };
            product_variant: {
                image: {
                    id: number;
                    created_at: Date | null;
                    updated_at: Date | null;
                    description: string | null;
                    type: import("@prisma/client").$Enums.file_type;
                    original_name: string;
                    stored_name: string;
                    mime_type: string | null;
                    size: number;
                    path: string;
                    uploaded_by: number | null;
                    deleted_at: Date | null;
                } | null;
            } & {
                id: number;
                created_at: Date | null;
                updated_at: Date | null;
                name: string;
                product_id: number;
                type: import("@prisma/client").$Enums.product_variant_type;
                image_file_id: number | null;
                color: string | null;
                background_color: string | null;
                price: number;
                customizations: import("@prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            id: number;
            status: string;
            created_at: Date | null;
            updated_at: Date | null;
            order_id: number;
            product_id: number;
            product_variant_id: number;
            quantity: number;
        })[];
    } & {
        id: number;
        key: string;
        email: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createOrder(data: any): Promise<{
        id: number;
        key: string;
        email: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    updateOrder(id: number, data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
        id: number;
        key: string;
        email: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteOrder(id: number): import("@prisma/client").Prisma.Prisma__orderClient<{
        id: number;
        key: string;
        email: string;
        first_name: string;
        last_name: string;
        delivery_method: string;
        total_price: import("@prisma/client/runtime/library").Decimal;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOrderItems(orderId: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        quantity: number;
    }[]>;
    addOrderItem(orderId: number, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateOrderItem(orderId: number, itemId: number, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteOrderItem(orderId: number, itemId: number): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
