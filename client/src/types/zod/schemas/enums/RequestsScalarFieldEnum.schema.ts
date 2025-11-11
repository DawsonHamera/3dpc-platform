import * as z from 'zod';

export const RequestsScalarFieldEnumSchema = z.enum(['id', 'submitted_by', 'email', 'comments', 'status_id', 'created_at', 'updated_at', 'deleted_at', 'requested_date', 'due_date', 'priority'])

export type RequestsScalarFieldEnum = z.infer<typeof RequestsScalarFieldEnumSchema>;