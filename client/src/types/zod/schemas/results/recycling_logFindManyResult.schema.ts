import * as z from 'zod';
export const recycling_logFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  type: z.unknown(),
  amount: z.number().int(),
  created_at: z.date(),
  user_id: z.number().int(),
  created_by: z.unknown()
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