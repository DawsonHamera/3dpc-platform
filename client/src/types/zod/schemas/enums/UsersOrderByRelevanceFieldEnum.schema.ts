import * as z from 'zod';

export const UsersOrderByRelevanceFieldEnumSchema = z.enum(['name', 'email', 'password_hash'])

export type UsersOrderByRelevanceFieldEnum = z.infer<typeof UsersOrderByRelevanceFieldEnumSchema>;