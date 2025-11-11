import * as z from 'zod';
// prettier-ignore
export const usersInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string(),
    password_hash: z.string(),
    role_id: z.number().int(),
    grade_id: z.number().int().optional().nullable(),
    score: z.number().int(),
    last_active: z.date().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    attendances: z.array(z.unknown()),
    error_reports: z.array(z.unknown()),
    events: z.array(z.unknown()),
    files: z.array(z.unknown()),
    point_logs: z.array(z.unknown()),
    process_instance_steps: z.array(z.unknown()),
    process_instances: z.array(z.unknown()),
    process_logs: z.array(z.unknown()),
    tasks: z.array(z.unknown()),
    grade: z.unknown().optional().nullable(),
    role: z.unknown(),
    activity_logs: z.array(z.unknown())
}).strict();

export type usersInputType = z.infer<typeof usersInputSchema>;
