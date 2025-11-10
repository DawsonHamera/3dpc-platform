import { FilesService } from './files.service';
import { File } from './entities/file.entity';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    upload(file: Express.Multer.File, body: any, user?: any): import("@prisma/client").Prisma.Prisma__filesClient<{
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
        id: number;
        uploaded_by: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions> | {
        success: boolean;
        message: string;
    };
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
        id: number;
        uploaded_by: number | null;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__filesClient<{
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
        id: number;
        uploaded_by: number | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateFileDto: Partial<File>): Promise<{
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
        id: number;
        uploaded_by: number | null;
    }>;
    remove(id: string): Promise<void>;
}
