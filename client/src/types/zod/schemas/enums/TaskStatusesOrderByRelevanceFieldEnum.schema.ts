import * as z from 'zod';

export const TaskStatusesOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description'])

export type TaskStatusesOrderByRelevanceFieldEnum = z.infer<typeof TaskStatusesOrderByRelevanceFieldEnumSchema>;