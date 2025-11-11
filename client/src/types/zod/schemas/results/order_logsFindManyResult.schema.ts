import * as z from 'zod';
export const order_logsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  order_id: z.number().int(),
  log_timestamp: z.date().optional(),
  log_message: z.string(),
  log_details: z.string().optional(),
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