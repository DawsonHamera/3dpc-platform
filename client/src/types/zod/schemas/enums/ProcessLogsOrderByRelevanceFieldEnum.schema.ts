import * as z from 'zod';

export const ProcessLogsOrderByRelevanceFieldEnumSchema = z.enum(['message', 'data'])

export type ProcessLogsOrderByRelevanceFieldEnum = z.infer<typeof ProcessLogsOrderByRelevanceFieldEnumSchema>;