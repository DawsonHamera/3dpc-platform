import * as z from 'zod';
export const ordersFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  customer_id: z.number().int().optional(),
  order_date: z.date().optional(),
  requested_by_date: z.date().optional(),
  order_status: z.string().optional(),
  payment_status: z.string().optional(),
  shipping_method: z.string().optional(),
  shipping_address: z.string().optional(),
  total_price: z.number().optional(),
  order_items: z.array(z.unknown()),
  order_logs: z.array(z.unknown())
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