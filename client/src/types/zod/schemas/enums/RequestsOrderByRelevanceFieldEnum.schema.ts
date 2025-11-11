import * as z from 'zod';

export const RequestsOrderByRelevanceFieldEnumSchema = z.enum(['submitted_by', 'email', 'comments'])

export type RequestsOrderByRelevanceFieldEnum = z.infer<typeof RequestsOrderByRelevanceFieldEnumSchema>;