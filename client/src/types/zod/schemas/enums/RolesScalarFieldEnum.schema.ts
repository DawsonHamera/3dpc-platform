import * as z from 'zod';

export const RolesScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'created_at', 'updated_at'])

export type RolesScalarFieldEnum = z.infer<typeof RolesScalarFieldEnumSchema>;