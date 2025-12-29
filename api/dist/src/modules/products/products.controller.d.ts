import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        variants: ({
            image: {
                id: number;
                description: string | null;
                created_at: Date | null;
                updated_at: Date | null;
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
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            product_id: number;
            type: import("@prisma/client").$Enums.product_variant_type;
            image_file_id: number | null;
            color: string | null;
            background_color: string | null;
            price: number;
            customizations: import("@prisma/client/runtime/library").JsonValue | null;
        })[];
    } & {
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    })[]>;
    findAllSections(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    findVarient(id: string, variantId: string): import("@prisma/client").Prisma.Prisma__product_variantClient<({
        image: {
            id: number;
            description: string | null;
            created_at: Date | null;
            updated_at: Date | null;
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
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        product_id: number;
        type: import("@prisma/client").$Enums.product_variant_type;
        image_file_id: number | null;
        color: string | null;
        background_color: string | null;
        price: number;
        customizations: import("@prisma/client/runtime/library").JsonValue | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__productClient<({
        variants: ({
            image: {
                id: number;
                description: string | null;
                created_at: Date | null;
                updated_at: Date | null;
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
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            product_id: number;
            type: import("@prisma/client").$Enums.product_variant_type;
            image_file_id: number | null;
            color: string | null;
            background_color: string | null;
            price: number;
            customizations: import("@prisma/client/runtime/library").JsonValue | null;
        })[];
    } & {
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createVariant(id: string, data: any): import("@prisma/client").Prisma.Prisma__product_variantClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        product_id: number;
        type: import("@prisma/client").$Enums.product_variant_type;
        image_file_id: number | null;
        color: string | null;
        background_color: string | null;
        price: number;
        customizations: import("@prisma/client/runtime/library").JsonValue | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createSection(data: any): import("@prisma/client").Prisma.Prisma__sectionClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateSection(id: string, data: any): import("@prisma/client").Prisma.Prisma__sectionClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateVariant(id: string, variantId: string, data: any): import("@prisma/client").Prisma.Prisma__product_variantClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        product_id: number;
        type: import("@prisma/client").$Enums.product_variant_type;
        image_file_id: number | null;
        color: string | null;
        background_color: string | null;
        price: number;
        customizations: import("@prisma/client/runtime/library").JsonValue | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    removeSection(id: string): import("@prisma/client").Prisma.Prisma__sectionClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    removeVariant(id: string, variantId: string): import("@prisma/client").Prisma.Prisma__product_variantClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        product_id: number;
        type: import("@prisma/client").$Enums.product_variant_type;
        image_file_id: number | null;
        color: string | null;
        background_color: string | null;
        price: number;
        customizations: import("@prisma/client/runtime/library").JsonValue | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
