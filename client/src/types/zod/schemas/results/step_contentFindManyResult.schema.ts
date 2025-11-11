import * as z from 'zod';
export const step_contentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  step_id: z.number().int(),
  content_order: z.number().int(),
  content_type: z.unknown(),
  content_data: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  steps: z.unknown()
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