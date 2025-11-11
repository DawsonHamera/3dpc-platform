import * as z from 'zod';

export const StepTriggersOrderByRelevanceFieldEnumSchema = z.enum(['trigger_config', 'condition_rules'])

export type StepTriggersOrderByRelevanceFieldEnum = z.infer<typeof StepTriggersOrderByRelevanceFieldEnumSchema>;