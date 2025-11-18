import * as z from 'zod';

export const AttendanceScalarFieldEnumSchema = z.enum(['id', 'user_id', 'event_id', 'status', 'created_at', 'updated_at', 'rsvp_time', 'arrival_time'])

export type AttendanceScalarFieldEnum = z.infer<typeof AttendanceScalarFieldEnumSchema>;