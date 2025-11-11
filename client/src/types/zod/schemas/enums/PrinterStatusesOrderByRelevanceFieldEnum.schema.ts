import * as z from 'zod';

export const PrinterStatusesOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description'])

export type PrinterStatusesOrderByRelevanceFieldEnum = z.infer<typeof PrinterStatusesOrderByRelevanceFieldEnumSchema>;