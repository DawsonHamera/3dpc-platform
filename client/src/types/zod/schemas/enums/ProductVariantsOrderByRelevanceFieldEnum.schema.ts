import * as z from 'zod';

export const ProductVariantsOrderByRelevanceFieldEnumSchema = z.enum(['name', 'background_color', 'model_color'])

export type ProductVariantsOrderByRelevanceFieldEnum = z.infer<typeof ProductVariantsOrderByRelevanceFieldEnumSchema>;