import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    findByUser(user: any): import("@prisma/client").Prisma.PrismaPromise<{
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
    findOpen(): import("@prisma/client").Prisma.PrismaPromise<{
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__taskClient<({
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
    create(data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    updateStatus(id: string, data: any): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__taskClient<{
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
    claim(id: string, user: any): Promise<{
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
    release(id: string, user: any): Promise<{
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
