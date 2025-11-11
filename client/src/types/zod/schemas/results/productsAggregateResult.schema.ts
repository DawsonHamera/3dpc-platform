import * as z from 'zod';
export const productsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    price: z.number(),
    model_id: z.number(),
    default_variant_id: z.number(),
    custom_options: z.number(),
    tags: z.number(),
    section_id: z.number(),
    product_variants: z.number(),
    models: z.number(),
    shop_sections: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    price: z.number().nullable(),
    model_id: z.number().nullable(),
    default_variant_id: z.number().nullable(),
    section_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    price: z.number().nullable(),
    model_id: z.number().nullable(),
    default_variant_id: z.number().nullable(),
    section_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    model_id: z.number().int().nullable(),
    default_variant_id: z.number().int().nullable(),
    custom_options: z.string().nullable(),
    tags: z.string().nullable(),
    section_id: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    model_id: z.number().int().nullable(),
    default_variant_id: z.number().int().nullable(),
    custom_options: z.string().nullable(),
    tags: z.string().nullable(),
    section_id: z.number().int().nullable()
  }).nullable().optional()});