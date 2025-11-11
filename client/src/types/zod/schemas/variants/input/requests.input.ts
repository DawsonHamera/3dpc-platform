import * as z from 'zod';
// prettier-ignore
export const requestsInputSchema = z.object({
    id: z.number().int(),
    submitted_by: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    comments: z.string().optional().nullable(),
    status_id: z.number().int().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    requested_date: z.date().optional().nullable(),
    due_date: z.date().optional().nullable(),
    priority: z.number().int().optional().nullable(),
    request_statuses: z.unknown().optional().nullable(),
    tasks: z.array(z.unknown())
}).strict();

export type requestsInputType = z.infer<typeof requestsInputSchema>;
