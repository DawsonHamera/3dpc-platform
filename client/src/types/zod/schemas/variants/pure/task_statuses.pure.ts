import * as z from 'zod';
// prettier-ignore
export const task_statusesModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    tasks: z.array(z.unknown())
}).strict();

export type task_statusesPureType = z.infer<typeof task_statusesModelSchema>;
