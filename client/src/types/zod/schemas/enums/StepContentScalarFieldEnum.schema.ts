import * as z from 'zod';

export const StepContentScalarFieldEnumSchema = z.enum(['id', 'step_id', 'content_order', 'content_type', 'content_data', 'created_at', 'updated_at'])

export type StepContentScalarFieldEnum = z.infer<typeof StepContentScalarFieldEnumSchema>;