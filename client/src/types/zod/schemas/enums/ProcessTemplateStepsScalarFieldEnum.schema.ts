import * as z from 'zod';

export const ProcessTemplateStepsScalarFieldEnumSchema = z.enum(['id', 'process_template_id', 'step_id', 'step_order', 'is_required', 'created_at', 'updated_at'])

export type ProcessTemplateStepsScalarFieldEnum = z.infer<typeof ProcessTemplateStepsScalarFieldEnumSchema>;