import * as z from 'zod';
export const point_logFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  change: z.number().int(),
  reason: z.string(),
  details: z.string().optional(),
  logged_at: z.date(),
  user: z.unknown()
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