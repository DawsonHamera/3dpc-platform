import * as z from 'zod';

export const RequestStatusesScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'created_at', 'updated_at'])

export type RequestStatusesScalarFieldEnum = z.infer<typeof RequestStatusesScalarFieldEnumSchema>;