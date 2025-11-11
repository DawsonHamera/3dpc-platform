import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    upload(file: Express.Multer.File, body: any, user?: any): import("@prisma/client").Prisma.Prisma__filesClient<{
        path: string;
        id: number;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        type: import("@prisma/client").$Enums.files_type;
        description: string | null;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        uploaded_by: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions> | {
        success: boolean;
        message: string;
    };
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        uploader: {
            id: number;
            name: string;
            email: string;
            password_hash: string;
            role_id: number;
            grade_id: number | null;
            score: number;
            last_active: Date | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
        } | null;
    } & {
        path: string;
        id: number;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        type: import("@prisma/client").$Enums.files_type;
        description: string | null;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        uploaded_by: number | null;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__filesClient<({
        uploader: {
            id: number;
            name: string;
            email: string;
            password_hash: string;
            role_id: number;
            grade_id: number | null;
            score: number;
            last_active: Date | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
        } | null;
    } & {
        path: string;
        id: number;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        type: import("@prisma/client").$Enums.files_type;
        description: string | null;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        uploaded_by: number | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateFileDto: Partial<File>): Promise<{
        path: string;
        id: number;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        type: import("@prisma/client").$Enums.files_type;
        description: string | null;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        uploaded_by: number | null;
    }>;
    remove(id: string): Promise<void>;
}
