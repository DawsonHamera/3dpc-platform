import * as z from 'zod';
// prettier-ignore
export const task_statusesInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    tasks: z.array(z.unknown())
}).strict();

export type task_statusesInputType = z.infer<typeof task_statusesInputSchema>;
