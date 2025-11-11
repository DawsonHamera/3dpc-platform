import * as z from 'zod';

export const MigrationsScalarFieldEnumSchema = z.enum(['id', 'version', 'class', 'group', 'namespace', 'time', 'batch'])

export type MigrationsScalarFieldEnum = z.infer<typeof MigrationsScalarFieldEnumSchema>;