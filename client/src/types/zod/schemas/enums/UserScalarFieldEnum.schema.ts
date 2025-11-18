import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'password_hash', 'role_id', 'grade', 'points', 'last_active', 'created_at', 'updated_at', 'deleted_at'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;