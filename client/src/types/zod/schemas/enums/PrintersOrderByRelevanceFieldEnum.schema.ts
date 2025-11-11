import * as z from 'zod';

export const PrintersOrderByRelevanceFieldEnumSchema = z.enum(['name', 'location', 'owner', 'details'])

export type PrintersOrderByRelevanceFieldEnum = z.infer<typeof PrintersOrderByRelevanceFieldEnumSchema>;