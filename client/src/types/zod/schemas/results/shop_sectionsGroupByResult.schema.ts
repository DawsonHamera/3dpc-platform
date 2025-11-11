import * as z from 'zod';
export const shop_sectionsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  label: z.string(),
  order_index: z.number().int(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    label: z.number(),
    order_index: z.number(),
    products: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    order_index: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    order_index: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    label: z.string().nullable(),
    order_index: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    label: z.string().nullable(),
    order_index: z.number().int().nullable()
  }).nullable().optional()
}));