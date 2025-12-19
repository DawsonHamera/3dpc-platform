import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findProfile(user: any): any;
    findPoints(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        points: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__userClient<({
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
    create(createUserDto: any): Promise<{
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
    update(id: string, updateUserDto: any): Promise<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__userClient<{
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
    heartbeat(user: any): Promise<{
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
    updatePoints(id: string, body: {
        points: number;
        reason: string;
        details?: string;
    }): Promise<{
        error: string;
        message?: undefined;
        user?: undefined;
    } | {
        message: string;
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
        error?: undefined;
    }>;
    getUserPointsLogs(id: string): import("@prisma/client").Prisma.PrismaPromise<({
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
