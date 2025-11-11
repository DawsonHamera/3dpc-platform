import * as z from 'zod';

export const StepContentOrderByRelevanceFieldEnumSchema = z.enum(['content_data'])

export type StepContentOrderByRelevanceFieldEnum = z.infer<typeof StepContentOrderByRelevanceFieldEnumSchema>;