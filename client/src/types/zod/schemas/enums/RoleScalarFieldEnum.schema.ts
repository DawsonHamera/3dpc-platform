import * as z from 'zod';

export const RoleScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'created_at', 'updated_at'])

export type RoleScalarFieldEnum = z.infer<typeof RoleScalarFieldEnumSchema>;