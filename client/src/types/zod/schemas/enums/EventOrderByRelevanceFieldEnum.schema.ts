import * as z from 'zod';

export const EventOrderByRelevanceFieldEnumSchema = z.enum(['title', 'description', 'location', 'verification_code'])

export type EventOrderByRelevanceFieldEnum = z.infer<typeof EventOrderByRelevanceFieldEnumSchema>;