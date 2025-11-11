import * as z from 'zod';

export const GradesScalarFieldEnumSchema = z.enum(['id', 'grade', 'description', 'created_at', 'updated_at'])

export type GradesScalarFieldEnum = z.infer<typeof GradesScalarFieldEnumSchema>;