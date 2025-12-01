import { PrismaService } from '../../prisma/prisma.service';
export declare class ProductTemplatesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllProductTemplates(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        model_id: number;
        material_id: number;
        print_settings: string | null;
        post_processing: string | null;
    }[]>;
    findProductTemplateById(id: number): import("@prisma/client").Prisma.Prisma__product_templateClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        model_id: number;
        material_id: number;
        print_settings: string | null;
        post_processing: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createProductTemplate(data: any): import("@prisma/client").Prisma.Prisma__product_templateClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        model_id: number;
        material_id: number;
        print_settings: string | null;
        post_processing: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateProductTemplate(id: number, data: any): import("@prisma/client").Prisma.Prisma__product_templateClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        model_id: number;
        material_id: number;
        print_settings: string | null;
        post_processing: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteProductTemplate(id: number): import("@prisma/client").Prisma.Prisma__product_templateClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        model_id: number;
        material_id: number;
        print_settings: string | null;
        post_processing: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
