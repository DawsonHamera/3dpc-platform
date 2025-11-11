import * as z from 'zod';
// prettier-ignore
export const attendancesModelSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    event_id: z.number().int(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    arrival_time: z.date().nullable(),
    event: z.unknown(),
    user: z.unknown()
}).strict();

export type attendancesPureType = z.infer<typeof attendancesModelSchema>;
