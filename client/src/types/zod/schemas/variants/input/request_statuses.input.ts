import * as z from 'zod';
// prettier-ignore
export const request_statusesInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    requests: z.array(z.unknown())
}).strict();

export type request_statusesInputType = z.infer<typeof request_statusesInputSchema>;
