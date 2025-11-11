import * as z from 'zod';

export const TasksOrderByRelevanceFieldEnumSchema = z.enum(['material_slots', 'quality', 'comments'])

export type TasksOrderByRelevanceFieldEnum = z.infer<typeof TasksOrderByRelevanceFieldEnumSchema>;