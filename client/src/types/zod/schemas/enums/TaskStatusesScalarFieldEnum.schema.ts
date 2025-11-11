import * as z from 'zod';

export const TaskStatusesScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'created_at', 'updated_at'])

export type TaskStatusesScalarFieldEnum = z.infer<typeof TaskStatusesScalarFieldEnumSchema>;