import { ModelsService } from './models.service';
export declare class ModelsController {
    private readonly modelsService;
    constructor(modelsService: ModelsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        file: {
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
        };
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
        file_id: number;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__modelClient<({
        file: {
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
        };
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
        file_id: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__modelClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        image_file_id: number | null;
        file_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__modelClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        image_file_id: number | null;
        file_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__modelClient<{
        name: string;
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        description: string | null;
        image_file_id: number | null;
        file_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
