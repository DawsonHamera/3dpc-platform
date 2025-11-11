import * as z from 'zod';
// prettier-ignore
export const error_reportsInputSchema = z.object({
    id: z.number().int(),
    task_id: z.number().int(),
    submitted_by: z.number().int(),
    step_id: z.number().int().optional().nullable(),
    description: z.string().optional().nullable(),
    image_url: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    steps: z.unknown().optional().nullable(),
    users: z.unknown(),
    tasks: z.unknown()
}).strict();

export type error_reportsInputType = z.infer<typeof error_reportsInputSchema>;
