import * as z from 'zod';

export const ProductsOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description', 'custom_options', 'tags'])

export type ProductsOrderByRelevanceFieldEnum = z.infer<typeof ProductsOrderByRelevanceFieldEnumSchema>;