import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findProfile(user: any): any;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__usersClient<{
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
    create(createUserDto: any): import("@prisma/client").Prisma.Prisma__usersClient<{
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
    update(id: string, updateUserDto: any): import("@prisma/client").Prisma.Prisma__usersClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__usersClient<{
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
