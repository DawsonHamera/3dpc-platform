import { PrismaService } from '../../prisma/prisma.service';
export declare class MaterialsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllMaterials(): import("@prisma/client").Prisma.PrismaPromise<({
        image_file: {
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
        description: string | null;
        image_file_id: number | null;
        type: import("@prisma/client").$Enums.material_type;
        quantity: number;
        color: string | null;
    })[]>;
    findMaterialById(id: number): import("@prisma/client").Prisma.Prisma__materialClient<({
        image_file: {
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
        description: string | null;
        image_file_id: number | null;
        type: import("@prisma/client").$Enums.material_type;
        quantity: number;
        color: string | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    createMaterial(data: any): import("@prisma/client").Prisma.Prisma__materialClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        image_file_id: number | null;
        type: import("@prisma/client").$Enums.material_type;
        quantity: number;
        color: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateMaterial(id: number, data: any): import("@prisma/client").Prisma.Prisma__materialClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        image_file_id: number | null;
        type: import("@prisma/client").$Enums.material_type;
        quantity: number;
        color: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteMaterial(id: number): import("@prisma/client").Prisma.Prisma__materialClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        image_file_id: number | null;
        type: import("@prisma/client").$Enums.material_type;
        quantity: number;
        color: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
