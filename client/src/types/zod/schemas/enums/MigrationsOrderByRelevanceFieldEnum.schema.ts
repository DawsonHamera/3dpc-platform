import * as z from 'zod';

export const MigrationsOrderByRelevanceFieldEnumSchema = z.enum(['version', 'class', 'group', 'namespace'])

export type MigrationsOrderByRelevanceFieldEnum = z.infer<typeof MigrationsOrderByRelevanceFieldEnumSchema>;