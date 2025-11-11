import * as z from 'zod';

export const AttendancesScalarFieldEnumSchema = z.enum(['id', 'user_id', 'event_id', 'created_at', 'updated_at', 'arrival_time'])

export type AttendancesScalarFieldEnum = z.infer<typeof AttendancesScalarFieldEnumSchema>;