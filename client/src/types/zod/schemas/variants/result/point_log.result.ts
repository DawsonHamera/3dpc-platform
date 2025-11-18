import * as z from 'zod';
// prettier-ignore
export const point_logResultSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    change: z.number().int(),
    reason: z.string(),
    details: z.string().nullable(),
    logged_at: z.date(),
    user: z.unknown()
}).strict();

export type point_logResultType = z.infer<typeof point_logResultSchema>;
