import * as z from 'zod';
// prettier-ignore
export const requestsResultSchema = z.object({
    id: z.number().int(),
    submitted_by: z.string().nullable(),
    email: z.string().nullable(),
    comments: z.string().nullable(),
    status_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    requested_date: z.date().nullable(),
    due_date: z.date().nullable(),
    priority: z.number().int().nullable(),
    request_statuses: z.unknown().nullable(),
    tasks: z.array(z.unknown())
}).strict();

export type requestsResultType = z.infer<typeof requestsResultSchema>;
