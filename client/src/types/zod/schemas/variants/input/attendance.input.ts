import * as z from 'zod';
import { attendance_statusSchema } from '../../enums/attendance_status.schema';
// prettier-ignore
export const attendanceInputSchema = z.object({
    id: z.number().int(),
    user_id: z.number().int(),
    event_id: z.number().int(),
    status: attendance_statusSchema,
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    rsvp_time: z.date().optional().nullable(),
    arrival_time: z.date().optional().nullable(),
    event: z.unknown(),
    user: z.unknown()
}).strict();

export type attendanceInputType = z.infer<typeof attendanceInputSchema>;
