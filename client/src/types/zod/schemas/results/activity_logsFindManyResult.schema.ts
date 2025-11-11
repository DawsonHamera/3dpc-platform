import * as z from 'zod';
export const activity_logsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  action_type: z.string(),
  table_name: z.string(),
  record_id: z.number().int(),
  result: z.string(),
  details: z.unknown().optional(),
  created_at: z.date().optional(),
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