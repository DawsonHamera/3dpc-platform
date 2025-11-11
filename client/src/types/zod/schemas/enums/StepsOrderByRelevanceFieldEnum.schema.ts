import * as z from 'zod';

export const StepsOrderByRelevanceFieldEnumSchema = z.enum(['title', 'description'])

export type StepsOrderByRelevanceFieldEnum = z.infer<typeof StepsOrderByRelevanceFieldEnumSchema>;