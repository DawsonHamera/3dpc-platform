import * as z from 'zod';
// prettier-ignore
export const request_statusesResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    requests: z.array(z.unknown())
}).strict();

export type request_statusesResultType = z.infer<typeof request_statusesResultSchema>;
