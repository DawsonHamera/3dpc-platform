import * as z from 'zod';

export const RoleOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description'])

export type RoleOrderByRelevanceFieldEnum = z.infer<typeof RoleOrderByRelevanceFieldEnumSchema>;