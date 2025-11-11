import * as z from 'zod';

export const RequestStatusesOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description'])

export type RequestStatusesOrderByRelevanceFieldEnum = z.infer<typeof RequestStatusesOrderByRelevanceFieldEnumSchema>;