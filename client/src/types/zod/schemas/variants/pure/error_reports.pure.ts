import * as z from 'zod';
// prettier-ignore
export const error_reportsModelSchema = z.object({
    id: z.number().int(),
    task_id: z.number().int(),
    submitted_by: z.number().int(),
    step_id: z.number().int().nullable(),
    description: z.string().nullable(),
    image_url: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    steps: z.unknown().nullable(),
    users: z.unknown(),
    tasks: z.unknown()
}).strict();

export type error_reportsPureType = z.infer<typeof error_reportsModelSchema>;
