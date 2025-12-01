import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findByUser(user: any): import("@prisma/client").Prisma.PrismaPromise<{
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
    findOpen(): import("@prisma/client").Prisma.PrismaPromise<{
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__taskClient<({
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
    create(data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    updateStatus(id: string, data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    claim(id: string, user: any): Promise<{
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
    release(id: string, user: any): Promise<{
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
