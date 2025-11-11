import * as z from 'zod';
export const product_variantsUpsertResultSchema = z.object({
  id: z.number().int(),
  material_id: z.number().int().optional(),
  name: z.string(),
  image_file_id: z.number().int().optional(),
  background_color: z.string().optional(),
  model_color: z.string().optional(),
  product_id: z.number().int(),
  products: z.unknown()
});