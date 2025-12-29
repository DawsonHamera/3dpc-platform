import { PrismaService } from '../../prisma/prisma.service';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllProducts(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findProductById(id: number): import("@prisma/client").Prisma.Prisma__productClient<({
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
    findVariantById(variantId: number): import("@prisma/client").Prisma.Prisma__product_variantClient<({
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
    createSection(data: any): import("@prisma/client").Prisma.Prisma__sectionClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createProduct(data: any): import("@prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createVariant(productId: number, data: any): import("@prisma/client").Prisma.Prisma__product_variantClient<{
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
    updateSection(id: number, data: any): import("@prisma/client").Prisma.Prisma__sectionClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateProduct(id: number, data: any): import("@prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateVariant(variantId: number, data: any): import("@prisma/client").Prisma.Prisma__product_variantClient<{
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
    deleteSection(id: number): import("@prisma/client").Prisma.Prisma__sectionClient<{
        id: number;
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        productIds: import("@prisma/client/runtime/library").JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteProduct(id: number): import("@prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        description: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteVariant(id: number): import("@prisma/client").Prisma.Prisma__product_variantClient<{
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
}
