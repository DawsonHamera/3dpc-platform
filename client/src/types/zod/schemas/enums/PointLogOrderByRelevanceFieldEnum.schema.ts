import * as z from 'zod';

export const PointLogOrderByRelevanceFieldEnumSchema = z.enum(['reason', 'details'])

export type PointLogOrderByRelevanceFieldEnum = z.infer<typeof PointLogOrderByRelevanceFieldEnumSchema>;