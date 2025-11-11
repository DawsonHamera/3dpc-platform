import * as z from 'zod';

export const GradesOrderByRelevanceFieldEnumSchema = z.enum(['description'])

export type GradesOrderByRelevanceFieldEnum = z.infer<typeof GradesOrderByRelevanceFieldEnumSchema>;