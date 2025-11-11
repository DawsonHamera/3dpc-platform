import * as z from 'zod';
export const process_logsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  process_instance_id: z.number().int(),
  step_order: z.number().int().optional(),
  level: z.unknown(),
  action: z.unknown(),
  message: z.string(),
  data: z.string().optional(),
  user_id: z.number().int().optional(),
  created_at: z.date(),
  deleted_at: z.date().optional(),
  updated_at: z.date(),
  process_instances: z.unknown(),
  users: z.unknown().optional()
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