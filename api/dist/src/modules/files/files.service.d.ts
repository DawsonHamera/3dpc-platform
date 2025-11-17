import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: number): import("@prisma/client").Prisma.Prisma__fileClient<({
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__fileClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: any): import("@prisma/client").Prisma.Prisma__fileClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): Promise<void>;
}
