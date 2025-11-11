import * as z from 'zod';

export const ProcessTemplatesScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'version', 'category', 'estimated_duration', 'created_at', 'updated_at', 'deleted_at'])

export type ProcessTemplatesScalarFieldEnum = z.infer<typeof ProcessTemplatesScalarFieldEnumSchema>;