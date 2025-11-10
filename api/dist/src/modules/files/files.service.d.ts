import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        uploaded_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__filesClient<{
        id: number;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        uploaded_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__filesClient<{
        id: number;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        uploaded_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: any): Promise<{
        id: number;
        original_name: string;
        stored_name: string;
        mime_type: string | null;
        size: number;
        path: string;
        uploaded_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        description: string | null;
        type: import("@prisma/client").$Enums.files_type;
    }>;
    remove(id: number): Promise<void>;
}
