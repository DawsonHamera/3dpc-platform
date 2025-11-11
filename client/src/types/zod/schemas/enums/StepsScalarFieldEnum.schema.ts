import * as z from 'zod';

export const StepsScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'is_critical', 'created_at', 'updated_at', 'step_type', 'is_required', 'deleted_at'])

export type StepsScalarFieldEnum = z.infer<typeof StepsScalarFieldEnumSchema>;