import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__orderClient<({
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
    findByKey(key: string): Promise<{
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
    create(data: CreateOrderDto): Promise<{
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
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__orderClient<{
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
    findItems(orderId: string): import("@prisma/client").Prisma.PrismaPromise<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        quantity: number;
        product_id: number;
        order_id: number;
        product_variant_id: number;
    }[]>;
    addItem(orderId: string, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        quantity: number;
        product_id: number;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateItem(orderId: string, itemId: string, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        status: string;
        quantity: number;
        product_id: number;
        order_id: number;
        product_variant_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    removeItem(orderId: string, itemId: string): import("@prisma/client").Prisma.Prisma__order_itemClient<{
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
