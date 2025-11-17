import * as z from 'zod';

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['name', 'email', 'password_hash'])

export type UserOrderByRelevanceFieldEnum = z.infer<typeof UserOrderByRelevanceFieldEnumSchema>;