import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__orderClient<({
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
    findByKey(key: string): import("@prisma/client").Prisma.Prisma__orderClient<({
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
    create(data: CreateOrderDto): Promise<{
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
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__orderClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__orderClient<{
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
    findItems(orderId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        quantity: number;
    }[]>;
    addItem(orderId: string, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateItem(orderId: string, itemId: string, data: any): import("@prisma/client").Prisma.Prisma__order_itemClient<{
        id: number;
        status: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: number;
        product_id: number;
        product_variant_id: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    removeItem(orderId: string, itemId: string): import("@prisma/client").Prisma.Prisma__order_itemClient<{
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
