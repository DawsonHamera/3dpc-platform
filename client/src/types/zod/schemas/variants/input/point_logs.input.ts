import * as z from 'zod';
// prettier-ignore
export const point_logsInputSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    change: z.number().int(),
    reason: z.string(),
    details: z.string().optional().nullable(),
    logged_at: z.date(),
    users: z.unknown()
}).strict();

export type point_logsInputType = z.infer<typeof point_logsInputSchema>;
