import * as z from 'zod';
export const error_reportsDeleteResultSchema = z.nullable(z.object({
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
}));