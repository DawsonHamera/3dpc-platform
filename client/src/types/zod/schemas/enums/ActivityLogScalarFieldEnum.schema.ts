import * as z from 'zod';

export const ActivityLogScalarFieldEnumSchema = z.enum(['id', 'user_id', 'action_type', 'table_name', 'record_id', 'result', 'details', 'created_at'])

export type ActivityLogScalarFieldEnum = z.infer<typeof ActivityLogScalarFieldEnumSchema>;