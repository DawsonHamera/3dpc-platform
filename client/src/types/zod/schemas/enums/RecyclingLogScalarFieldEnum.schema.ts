import * as z from 'zod';

export const RecyclingLogScalarFieldEnumSchema = z.enum(['id', 'type', 'amount', 'created_at', 'user_id'])

export type RecyclingLogScalarFieldEnum = z.infer<typeof RecyclingLogScalarFieldEnumSchema>;