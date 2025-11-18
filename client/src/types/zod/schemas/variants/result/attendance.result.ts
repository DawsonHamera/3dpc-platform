import * as z from 'zod';
import { attendance_statusSchema } from '../../enums/attendance_status.schema';
// prettier-ignore
export const attendanceResultSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    event_id: z.number().int(),
    status: attendance_statusSchema,
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    rsvp_time: z.date().nullable(),
    arrival_time: z.date().nullable(),
    event: z.unknown(),
    user: z.unknown()
}).strict();

export type attendanceResultType = z.infer<typeof attendanceResultSchema>;
