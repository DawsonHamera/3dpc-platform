import * as z from 'zod';

export const ProcessLogsScalarFieldEnumSchema = z.enum(['id', 'process_instance_id', 'step_order', 'level', 'action', 'message', 'data', 'user_id', 'created_at', 'deleted_at', 'updated_at'])

export type ProcessLogsScalarFieldEnum = z.infer<typeof ProcessLogsScalarFieldEnumSchema>;