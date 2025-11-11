import * as z from 'zod';
// prettier-ignore
export const tasksInputSchema = z.object({
    id: z.number().int(),
    request_id: z.number().int(),
    model_id: z.number().int(),
    printer_id: z.number().int().optional().nullable(),
    material_slots: z.string(),
    quality: z.string().optional().nullable(),
    quantity: z.number().int(),
    status_id: z.number().int().optional().nullable(),
    assigned_user_id: z.number().int().optional().nullable(),
    comments: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    scheduled_start_time: z.date().optional().nullable(),
    scheduled_end_time: z.date().optional().nullable(),
    process_instance_id: z.number().int().optional().nullable(),
    error_reports: z.array(z.unknown()),
    process_instances: z.unknown().optional().nullable(),
    users: z.unknown().optional().nullable(),
    models: z.unknown(),
    printers: z.unknown().optional().nullable(),
    requests: z.unknown(),
    task_statuses: z.unknown().optional().nullable()
}).strict();

export type tasksInputType = z.infer<typeof tasksInputSchema>;
