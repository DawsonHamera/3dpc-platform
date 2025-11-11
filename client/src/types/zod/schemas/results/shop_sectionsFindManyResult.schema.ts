import * as z from 'zod';
export const shop_sectionsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string().optional(),
  label: z.string().optional(),
  order_index: z.number().int().optional(),
  products: z.array(z.unknown())
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