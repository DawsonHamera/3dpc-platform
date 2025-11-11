import * as z from 'zod';
// prettier-ignore
export const task_statusesResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    tasks: z.array(z.unknown())
}).strict();

export type task_statusesResultType = z.infer<typeof task_statusesResultSchema>;
