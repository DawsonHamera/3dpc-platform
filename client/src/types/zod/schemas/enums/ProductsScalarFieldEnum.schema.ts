import * as z from 'zod';

export const ProductsScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'price', 'model_id', 'default_variant_id', 'custom_options', 'tags', 'section_id'])

export type ProductsScalarFieldEnum = z.infer<typeof ProductsScalarFieldEnumSchema>;