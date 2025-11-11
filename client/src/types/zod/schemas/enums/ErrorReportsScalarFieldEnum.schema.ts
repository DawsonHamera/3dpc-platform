import * as z from 'zod';

export const ErrorReportsScalarFieldEnumSchema = z.enum(['id', 'task_id', 'submitted_by', 'step_id', 'description', 'image_url', 'created_at', 'updated_at'])

export type ErrorReportsScalarFieldEnum = z.infer<typeof ErrorReportsScalarFieldEnumSchema>;