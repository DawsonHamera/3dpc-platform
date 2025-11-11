import * as z from 'zod';

export const PointLogsOrderByRelevanceFieldEnumSchema = z.enum(['reason', 'details'])

export type PointLogsOrderByRelevanceFieldEnum = z.infer<typeof PointLogsOrderByRelevanceFieldEnumSchema>;