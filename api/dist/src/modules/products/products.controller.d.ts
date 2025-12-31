import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        variants: ({
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
        })[];
    } & {
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
    })[]>;
    findAllSections(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    findVarient(id: string, variantId: string): import("@prisma/client").Prisma.Prisma__product_variantClient<({
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__productClient<({
        variants: ({
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
        })[];
    } & {
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__productClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createVariant(id: string, data: any): import("@prisma/client").Prisma.Prisma__product_variantClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createSection(data: any): import("@prisma/client").Prisma.Prisma__sectionClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateSection(id: string, data: any): import("@prisma/client").Prisma.Prisma__sectionClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateVariant(id: string, variantId: string, data: any): import("@prisma/client").Prisma.Prisma__product_variantClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__productClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    removeSection(id: string): import("@prisma/client").Prisma.Prisma__sectionClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    removeVariant(id: string, variantId: string): import("@prisma/client").Prisma.Prisma__product_variantClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__productClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
