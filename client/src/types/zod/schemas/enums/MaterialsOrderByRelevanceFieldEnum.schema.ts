import * as z from 'zod';

export const MaterialsOrderByRelevanceFieldEnumSchema = z.enum(['name', 'hex', 'type', 'vendor', 'details', 'texture_url', 'cost_unit', 'supplier', 'safety_data'])

export type MaterialsOrderByRelevanceFieldEnum = z.infer<typeof MaterialsOrderByRelevanceFieldEnumSchema>;