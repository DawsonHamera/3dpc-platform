import { FilesService } from './files.service';
import { Prisma } from '@prisma/client';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    upload(file: Express.Multer.File, user?: any): Prisma.Prisma__fileClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions> | {
        success: boolean;
        message: string;
    };
    findAll(): Prisma.PrismaPromise<({
        uploader: {
            name: string;
            email: string;
            password_hash: string;
            grade: import("@prisma/client").$Enums.grade;
            points: number;
            last_active: Date | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
            id: number;
            role_id: number;
        } | null;
    } & {
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
    })[]>;
    findOne(id: string): Prisma.Prisma__fileClient<({
        uploader: {
            name: string;
            email: string;
            password_hash: string;
            grade: import("@prisma/client").$Enums.grade;
            points: number;
            last_active: Date | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
            id: number;
            role_id: number;
        } | null;
    } & {
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: string, updateFileDto: Partial<File>): Prisma.Prisma__fileClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    remove(id: string): Promise<void>;
}
