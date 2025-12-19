import type { ConfigType } from '@nestjs/config';
import appConfig from 'src/config/app.config';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    private appConfiguration;
    constructor(prisma: PrismaService, appConfiguration: ConfigType<typeof appConfig>);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        role: {
            id: number;
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            description: string | null;
        };
    } & {
        id: number;
        name: string;
        email: string;
        password_hash: string;
        role_id: number;
        grade: import("@prisma/client").$Enums.grade;
        points: number;
        last_active: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__userClient<({
        role: {
            id: number;
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            description: string | null;
        };
    } & {
        id: number;
        name: string;
        email: string;
        password_hash: string;
        role_id: number;
        grade: import("@prisma/client").$Enums.grade;
        points: number;
        last_active: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findPoints(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        points: number;
    }[]>;
    create(data: any): Promise<{
        id: number;
        name: string;
        email: string;
        password_hash: string;
        role_id: number;
        grade: import("@prisma/client").$Enums.grade;
        points: number;
        last_active: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    }>;
    update(id: number, data: any): Promise<{
        id: number;
        name: string;
        email: string;
        password_hash: string;
        role_id: number;
        grade: import("@prisma/client").$Enums.grade;
        points: number;
        last_active: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    }>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__userClient<{
        id: number;
        name: string;
        email: string;
        password_hash: string;
        role_id: number;
        grade: import("@prisma/client").$Enums.grade;
        points: number;
        last_active: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateUserPoints(id: number, points: number, reason: string, details?: string): Promise<{
        id: number;
        name: string;
        email: string;
        password_hash: string;
        role_id: number;
        grade: import("@prisma/client").$Enums.grade;
        points: number;
        last_active: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
    } | null>;
    getUserPointsLogs(id: number): import("@prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            name: string;
            email: string;
            password_hash: string;
            role_id: number;
            grade: import("@prisma/client").$Enums.grade;
            points: number;
            last_active: Date | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
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
