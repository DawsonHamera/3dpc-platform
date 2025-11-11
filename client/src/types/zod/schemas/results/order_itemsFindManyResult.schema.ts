import * as z from 'zod';
export const order_itemsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  order_id: z.number().int(),
  product_id: z.number().int(),
  quantity: z.number().int(),
  unit_price: z.number().optional(),
  status: z.string().optional(),
  total_price: z.number().optional(),
  orders: z.unknown()
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