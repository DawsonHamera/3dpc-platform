import * as z from 'zod';

export const EventsOrderByRelevanceFieldEnumSchema = z.enum(['title', 'description', 'location', 'verification_code'])

export type EventsOrderByRelevanceFieldEnum = z.infer<typeof EventsOrderByRelevanceFieldEnumSchema>;