import * as z from 'zod';

export const ActivityLogOrderByRelevanceFieldEnumSchema = z.enum(['action_type', 'table_name', 'result'])

export type ActivityLogOrderByRelevanceFieldEnum = z.infer<typeof ActivityLogOrderByRelevanceFieldEnumSchema>;