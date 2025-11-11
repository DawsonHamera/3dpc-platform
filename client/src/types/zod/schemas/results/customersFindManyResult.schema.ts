import * as z from 'zod';
export const customersFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email_address: z.string().optional(),
  ip_address: z.string().optional(),
  session_id: z.number().int().optional(),
  first_seen: z.date().optional(),
  last_seen: z.date().optional(),
  preferred_shipping_address: z.string().optional(),
  preferred_shipping_method: z.string().optional()
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