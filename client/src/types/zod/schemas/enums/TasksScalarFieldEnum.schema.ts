import * as z from 'zod';

export const TasksScalarFieldEnumSchema = z.enum(['id', 'request_id', 'model_id', 'printer_id', 'material_slots', 'quality', 'quantity', 'status_id', 'assigned_user_id', 'comments', 'created_at', 'updated_at', 'deleted_at', 'scheduled_start_time', 'scheduled_end_time', 'process_instance_id'])

export type TasksScalarFieldEnum = z.infer<typeof TasksScalarFieldEnumSchema>;