import { PrismaService } from '../../prisma/prisma.service';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllTasks(): import("@prisma/client").Prisma.PrismaPromise<({
        assigned_user: {
            id: number;
            created_at: Date | null;
            updated_at: Date | null;
            name: string;
            email: string;
            password_hash: string;
            role_id: number;
            grade: import("@prisma/client").$Enums.grade;
            points: number;
            last_active: Date | null;
            deleted_at: Date | null;
        } | null;
    } & {
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    })[]>;
    findTaskById(id: number): import("@prisma/client").Prisma.Prisma__taskClient<({
        assigned_user: {
            id: number;
            created_at: Date | null;
            updated_at: Date | null;
            name: string;
            email: string;
            password_hash: string;
            role_id: number;
            grade: import("@prisma/client").$Enums.grade;
            points: number;
            last_active: Date | null;
            deleted_at: Date | null;
        } | null;
    } & {
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findTasksByUserId(userId: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }[]>;
    findOpenTasks(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }[]>;
    findAllByUsers(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        tasks: {
            id: number;
            title: string;
            assigned_to: number | null;
            scheduled_date: Date | null;
            type: import("@prisma/client").$Enums.task_type;
            details: import("@prisma/client/runtime/library").JsonValue;
            status: import("@prisma/client").$Enums.task_status;
            is_required: boolean;
            is_open: boolean;
            created_at: Date | null;
            updated_at: Date | null;
        }[];
    }[]>;
    createTask(data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateTask(id: number, data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteTask(id: number): import("@prisma/client").Prisma.Prisma__taskClient<{
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    claimTask(id: number, userId: number): Promise<{
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    releaseTask(id: number, user: any): Promise<{
        id: number;
        title: string;
        assigned_to: number | null;
        scheduled_date: Date | null;
        type: import("@prisma/client").$Enums.task_type;
        details: import("@prisma/client/runtime/library").JsonValue;
        status: import("@prisma/client").$Enums.task_status;
        is_required: boolean;
        is_open: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
