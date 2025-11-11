import * as z from 'zod';
// prettier-ignore
export const attendancesInputSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    event_id: z.number().int(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    arrival_time: z.date().optional().nullable(),
    event: z.unknown(),
    user: z.unknown()
}).strict();

export type attendancesInputType = z.infer<typeof attendancesInputSchema>;
