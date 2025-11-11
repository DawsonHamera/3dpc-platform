import * as z from 'zod';
export const productsCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number().optional(),
  model_id: z.number().int(),
  default_variant_id: z.number().int().optional(),
  custom_options: z.string().optional(),
  tags: z.string().optional(),
  section_id: z.number().int().optional(),
  product_variants: z.array(z.unknown()),
  models: z.unknown(),
  shop_sections: z.unknown().optional()
});