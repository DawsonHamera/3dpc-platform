import * as z from 'zod';

export const RolesOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description'])

export type RolesOrderByRelevanceFieldEnum = z.infer<typeof RolesOrderByRelevanceFieldEnumSchema>;