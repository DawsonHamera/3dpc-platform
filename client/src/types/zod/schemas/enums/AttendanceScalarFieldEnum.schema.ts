import * as z from 'zod';

export const AttendanceScalarFieldEnumSchema = z.enum(['id', 'user_id', 'event_id', 'created_at', 'updated_at', 'arrival_time'])

export type AttendanceScalarFieldEnum = z.infer<typeof AttendanceScalarFieldEnumSchema>;