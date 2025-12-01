import { ProductTemplatesService } from './product-templates.service';
export declare class ProductTemplatesController {
    private readonly productTemplatesService;
    constructor(productTemplatesService: ProductTemplatesService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__product_templateClient<{
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
    create(data: any): import("@prisma/client").Prisma.Prisma__product_templateClient<{
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
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__product_templateClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__product_templateClient<{
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
