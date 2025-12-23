import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        role: {
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            description: string | null;
        };
    } & {
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
    })[]>;
    findProfile(user: any): any;
    findPoints(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        points: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__userClient<({
        role: {
            name: string;
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            description: string | null;
        };
    } & {
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(createUserDto: any): Promise<{
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
    }>;
    update(id: string, updateUserDto: any): Promise<{
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
    }>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__userClient<{
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
    heartbeat(user: any): Promise<{
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
        error?: undefined;
    }>;
    getUserPointsLogs(id: string): import("@prisma/client").Prisma.PrismaPromise<({
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
