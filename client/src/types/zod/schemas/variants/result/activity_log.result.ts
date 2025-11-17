import * as z from 'zod';
// prettier-ignore
export const activity_logResultSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    action_type: z.string(),
    table_name: z.string(),
    record_id: z.number().int(),
    result: z.string(),
    details: z.unknown().nullable(),
    created_at: z.date().nullable(),
    user: z.unknown()
}).strict();

export type activity_logResultType = z.infer<typeof activity_logResultSchema>;
