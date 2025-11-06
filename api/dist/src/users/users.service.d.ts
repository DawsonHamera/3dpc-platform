import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__usersClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: any): import("@prisma/client").Prisma.Prisma__usersClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: any): import("@prisma/client").Prisma.Prisma__usersClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__usersClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
