import * as z from 'zod';

export const ProductVariantsScalarFieldEnumSchema = z.enum(['id', 'material_id', 'name', 'image_file_id', 'background_color', 'model_color', 'product_id'])

export type ProductVariantsScalarFieldEnum = z.infer<typeof ProductVariantsScalarFieldEnumSchema>;