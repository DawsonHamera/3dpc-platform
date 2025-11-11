import * as z from 'zod';

export const ActivityLogsOrderByRelevanceFieldEnumSchema = z.enum(['action_type', 'table_name', 'result'])

export type ActivityLogsOrderByRelevanceFieldEnum = z.infer<typeof ActivityLogsOrderByRelevanceFieldEnumSchema>;