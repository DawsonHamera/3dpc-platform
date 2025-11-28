import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        attendances: ({
            user: {
                id: number;
                created_at: Date | null;
                updated_at: Date | null;
                deleted_at: Date | null;
                name: string;
                email: string;
                password_hash: string;
                role_id: number;
                grade: import("@prisma/client").$Enums.grade;
                points: number;
                last_active: Date | null;
            };
        } & {
            id: number;
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            event_id: number;
            status: import("@prisma/client").$Enums.attendance_status;
            arrival_time: Date | null;
        })[];
        image_file: {
            id: number;
            description: string | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
            original_name: string;
            stored_name: string;
            mime_type: string | null;
            size: number;
            path: string;
            uploaded_by: number | null;
            type: import("@prisma/client").$Enums.file_type;
        } | null;
    } & {
        id: number;
        title: string;
        description: string;
        location: string;
        start_time: Date;
        end_time: Date;
        image_file_id: number | null;
        is_featured: boolean | null;
        event_type: import("@prisma/client").$Enums.events_event_type | null;
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        verification_code: string;
    })[]>;
    findCurrent(): import("@prisma/client").Prisma.Prisma__eventClient<{
        id: number;
        title: string;
        description: string;
        location: string;
        start_time: Date;
        end_time: Date;
        image_file_id: number | null;
        is_featured: boolean | null;
        event_type: import("@prisma/client").$Enums.events_event_type | null;
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        verification_code: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__eventClient<({
        attendances: ({
            user: {
                id: number;
                created_at: Date | null;
                updated_at: Date | null;
                deleted_at: Date | null;
                name: string;
                email: string;
                password_hash: string;
                role_id: number;
                grade: import("@prisma/client").$Enums.grade;
                points: number;
                last_active: Date | null;
            };
        } & {
            id: number;
            user_id: number;
            created_at: Date | null;
            updated_at: Date | null;
            event_id: number;
            status: import("@prisma/client").$Enums.attendance_status;
            arrival_time: Date | null;
        })[];
        image_file: {
            id: number;
            description: string | null;
            created_at: Date | null;
            updated_at: Date | null;
            deleted_at: Date | null;
            original_name: string;
            stored_name: string;
            mime_type: string | null;
            size: number;
            path: string;
            uploaded_by: number | null;
            type: import("@prisma/client").$Enums.file_type;
        } | null;
    } & {
        id: number;
        title: string;
        description: string;
        location: string;
        start_time: Date;
        end_time: Date;
        image_file_id: number | null;
        is_featured: boolean | null;
        event_type: import("@prisma/client").$Enums.events_event_type | null;
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        verification_code: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findEventCode(id: string): import("@prisma/client").Prisma.Prisma__eventClient<{
        verification_code: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(createEventDto: any, user: any): import("@prisma/client").Prisma.Prisma__eventClient<{
        id: number;
        title: string;
        description: string;
        location: string;
        start_time: Date;
        end_time: Date;
        image_file_id: number | null;
        is_featured: boolean | null;
        event_type: import("@prisma/client").$Enums.events_event_type | null;
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        verification_code: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateEventDto: any): import("@prisma/client").Prisma.Prisma__eventClient<{
        id: number;
        title: string;
        description: string;
        location: string;
        start_time: Date;
        end_time: Date;
        image_file_id: number | null;
        is_featured: boolean | null;
        event_type: import("@prisma/client").$Enums.events_event_type | null;
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        verification_code: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__eventClient<{
        id: number;
        title: string;
        description: string;
        location: string;
        start_time: Date;
        end_time: Date;
        image_file_id: number | null;
        is_featured: boolean | null;
        event_type: import("@prisma/client").$Enums.events_event_type | null;
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        deleted_at: Date | null;
        verification_code: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    attendEvent(id: string, user: any, code?: string, status?: string): Promise<{
        id: number;
        user_id: number;
        created_at: Date | null;
        updated_at: Date | null;
        event_id: number;
        status: import("@prisma/client").$Enums.attendance_status;
        arrival_time: Date | null;
    } | {
        statusCode: number;
        message: string;
        data: any;
    } | undefined>;
    getUserAttendance(eventId: string, user: any): import("@prisma/client").Prisma.Prisma__attendanceClient<{
        id: number;
        user_id: number;
        created_at: Date | null;
        updated_at: Date | null;
        event_id: number;
        status: import("@prisma/client").$Enums.attendance_status;
        arrival_time: Date | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
