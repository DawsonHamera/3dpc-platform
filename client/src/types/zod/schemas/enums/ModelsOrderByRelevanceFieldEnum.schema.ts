import * as z from 'zod';

export const ModelsOrderByRelevanceFieldEnumSchema = z.enum(['name', 'material_slots', 'description', 'tags'])

export type ModelsOrderByRelevanceFieldEnum = z.infer<typeof ModelsOrderByRelevanceFieldEnumSchema>;