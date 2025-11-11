import * as z from 'zod';

export const ProcessInstanceStepsScalarFieldEnumSchema = z.enum(['id', 'process_instance_id', 'step_id', 'step_order', 'status', 'started_at', 'completed_at', 'assigned_user_id', 'is_required', 'input_data', 'output_data', 'metadata', 'created_at', 'updated_at', 'deleted_at', 'due_date', 'notes'])

export type ProcessInstanceStepsScalarFieldEnum = z.infer<typeof ProcessInstanceStepsScalarFieldEnumSchema>;