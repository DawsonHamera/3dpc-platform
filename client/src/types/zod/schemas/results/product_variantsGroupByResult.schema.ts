import * as z from 'zod';
export const product_variantsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  material_id: z.number().int(),
  name: z.string(),
  image_file_id: z.number().int(),
  background_color: z.string(),
  model_color: z.string(),
  product_id: z.number().int(),
  _count: z.object({
    id: z.number(),
    material_id: z.number(),
    name: z.number(),
    image_file_id: z.number(),
    background_color: z.number(),
    model_color: z.number(),
    product_id: z.number(),
    products: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    material_id: z.number().nullable(),
    image_file_id: z.number().nullable(),
    product_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    material_id: z.number().nullable(),
    image_file_id: z.number().nullable(),
    product_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    material_id: z.number().int().nullable(),
    name: z.string().nullable(),
    image_file_id: z.number().int().nullable(),
    background_color: z.string().nullable(),
    model_color: z.string().nullable(),
    product_id: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    material_id: z.number().int().nullable(),
    name: z.string().nullable(),
    image_file_id: z.number().int().nullable(),
    background_color: z.string().nullable(),
    model_color: z.string().nullable(),
    product_id: z.number().int().nullable()
  }).nullable().optional()
}));