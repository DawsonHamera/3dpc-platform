import * as z from 'zod';

export const PointLogsScalarFieldEnumSchema = z.enum(['id', 'user_id', 'change', 'reason', 'details', 'logged_at'])

export type PointLogsScalarFieldEnum = z.infer<typeof PointLogsScalarFieldEnumSchema>;