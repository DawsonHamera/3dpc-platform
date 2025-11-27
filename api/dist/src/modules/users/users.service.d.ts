import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__userClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findPoints(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        points: number;
    }[]>;
    create(data: any): import("@prisma/client").Prisma.Prisma__userClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: any): import("@prisma/client").Prisma.Prisma__userClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__userClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateUserPoints(id: number, points: number, reason: string, details?: string): Promise<{
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
    } | null>;
    getUserPointsLogs(id: number): import("@prisma/client").Prisma.PrismaPromise<({
        user: {
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
        };
    } & {
        id: number;
        user_id: number;
        change: number;
        reason: string;
        details: string | null;
        logged_at: Date;
    })[]>;
}
