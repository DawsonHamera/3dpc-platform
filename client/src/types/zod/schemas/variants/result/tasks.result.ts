import * as z from 'zod';
// prettier-ignore
export const tasksResultSchema = z.object({
    id: z.number().int(),
    request_id: z.number().int(),
    model_id: z.number().int(),
    printer_id: z.number().int().nullable(),
    material_slots: z.string(),
    quality: z.string().nullable(),
    quantity: z.number().int(),
    status_id: z.number().int().nullable(),
    assigned_user_id: z.number().int().nullable(),
    comments: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    scheduled_start_time: z.date().nullable(),
    scheduled_end_time: z.date().nullable(),
    process_instance_id: z.number().int().nullable(),
    error_reports: z.array(z.unknown()),
    process_instances: z.unknown().nullable(),
    users: z.unknown().nullable(),
    models: z.unknown(),
    printers: z.unknown().nullable(),
    requests: z.unknown(),
    task_statuses: z.unknown().nullable()
}).strict();

export type tasksResultType = z.infer<typeof tasksResultSchema>;
