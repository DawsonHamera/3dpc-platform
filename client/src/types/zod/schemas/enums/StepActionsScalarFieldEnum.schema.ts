import * as z from 'zod';

export const StepActionsScalarFieldEnumSchema = z.enum(['id', 'step_id', 'action_order', 'label', 'action_type', 'action_config', 'button_style', 'icon', 'is_enabled', 'confirmation_message', 'created_at', 'updated_at'])

export type StepActionsScalarFieldEnum = z.infer<typeof StepActionsScalarFieldEnumSchema>;