import * as z from 'zod';

export const StepActionsOrderByRelevanceFieldEnumSchema = z.enum(['label', 'action_type', 'action_config', 'icon', 'confirmation_message'])

export type StepActionsOrderByRelevanceFieldEnum = z.infer<typeof StepActionsOrderByRelevanceFieldEnumSchema>;