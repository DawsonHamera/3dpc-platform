import * as z from 'zod';

export const ErrorReportsOrderByRelevanceFieldEnumSchema = z.enum(['description', 'image_url'])

export type ErrorReportsOrderByRelevanceFieldEnum = z.infer<typeof ErrorReportsOrderByRelevanceFieldEnumSchema>;