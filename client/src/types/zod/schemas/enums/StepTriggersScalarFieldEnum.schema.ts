import * as z from 'zod';

export const StepTriggersScalarFieldEnumSchema = z.enum(['id', 'step_action_id', 'trigger_order', 'trigger_type', 'trigger_config', 'condition_rules', 'is_enabled', 'created_at', 'updated_at'])

export type StepTriggersScalarFieldEnum = z.infer<typeof StepTriggersScalarFieldEnumSchema>;