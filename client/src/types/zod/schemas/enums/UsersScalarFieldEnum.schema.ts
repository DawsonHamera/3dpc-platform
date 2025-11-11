import * as z from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'password_hash', 'role_id', 'grade_id', 'score', 'last_active', 'created_at', 'updated_at', 'deleted_at'])

export type UsersScalarFieldEnum = z.infer<typeof UsersScalarFieldEnumSchema>;