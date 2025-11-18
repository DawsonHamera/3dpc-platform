import * as z from 'zod';
// prettier-ignore
export const point_logModelSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    change: z.number().int(),
    reason: z.string(),
    details: z.string().nullable(),
    logged_at: z.date(),
    user: z.unknown()
}).strict();

export type point_logPureType = z.infer<typeof point_logModelSchema>;
