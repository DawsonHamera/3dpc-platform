import * as z from 'zod';

export const PrinterStatusesScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'created_at', 'updated_at'])

export type PrinterStatusesScalarFieldEnum = z.infer<typeof PrinterStatusesScalarFieldEnumSchema>;