import * as z from 'zod';
export const error_reportsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  task_id: z.number().int(),
  submitted_by: z.number().int(),
  step_id: z.number().int().optional(),
  description: z.string().optional(),
  image_url: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  steps: z.unknown().optional(),
  users: z.unknown(),
  tasks: z.unknown()
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