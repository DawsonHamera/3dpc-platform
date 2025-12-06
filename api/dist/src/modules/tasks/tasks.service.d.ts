import { PrismaService } from '../../prisma/prisma.service';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllTasks(): import("@prisma/client").Prisma.PrismaPromise<({
        assigned_user: {
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
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    })[]>;
    findTaskById(id: number): import("@prisma/client").Prisma.Prisma__taskClient<({
        assigned_user: {
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
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findTasksByUserId(userId: number): import("@prisma/client").Prisma.PrismaPromise<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }[]>;
    findOpenTasks(): import("@prisma/client").Prisma.PrismaPromise<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }[]>;
    findAllByUsers(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        tasks: {
            created_at: Date | null;
            updated_at: Date | null;
            id: number;
            title: string;
            details: import("@prisma/client/runtime/library").JsonValue;
            type: import("@prisma/client").$Enums.task_type;
            status: import("@prisma/client").$Enums.task_status;
            assigned_to: number | null;
            scheduled_date: Date | null;
            is_required: boolean;
            is_open: boolean;
        }[];
        id: number;
    }[]>;
    createTask(data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateTask(id: number, data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    deleteTask(id: number): import("@prisma/client").Prisma.Prisma__taskClient<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    claimTask(id: number, userId: number): Promise<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }>;
    releaseTask(id: number, user: any): Promise<{
        created_at: Date | null;
        updated_at: Date | null;
        id: number;
        title: string;
        details: import("@prisma/client/runtime/library").JsonValue;
        type: import("@prisma/client").$Enums.task_type;
        status: import("@prisma/client").$Enums.task_status;
        assigned_to: number | null;
        scheduled_date: Date | null;
        is_required: boolean;
        is_open: boolean;
    }>;
}
