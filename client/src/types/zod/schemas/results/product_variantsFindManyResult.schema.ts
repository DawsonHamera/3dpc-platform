import * as z from 'zod';
export const product_variantsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  material_id: z.number().int().optional(),
  name: z.string(),
  image_file_id: z.number().int().optional(),
  background_color: z.string().optional(),
  model_color: z.string().optional(),
  product_id: z.number().int(),
  products: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});