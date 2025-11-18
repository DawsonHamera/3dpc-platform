import * as z from 'zod';

export const PointLogScalarFieldEnumSchema = z.enum(['id', 'user_id', 'change', 'reason', 'details', 'logged_at'])

export type PointLogScalarFieldEnum = z.infer<typeof PointLogScalarFieldEnumSchema>;