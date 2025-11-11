import * as z from 'zod';

export const ProcessInstancesScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'process_template_id', 'status', 'priority', 'assigned_user_id', 'current_step_order', 'estimated_duration', 'actual_duration', 'started_at', 'completed_at', 'due_date', 'metadata', 'created_at', 'updated_at', 'deleted_at'])

export type ProcessInstancesScalarFieldEnum = z.infer<typeof ProcessInstancesScalarFieldEnumSchema>;