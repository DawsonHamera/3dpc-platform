import * as z from 'zod';
export const process_instancesFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  process_template_id: z.number().int(),
  status: z.unknown(),
  priority: z.unknown(),
  assigned_user_id: z.number().int().optional(),
  current_step_order: z.number().int(),
  estimated_duration: z.number().int().optional(),
  actual_duration: z.number().int().optional(),
  started_at: z.date().optional(),
  completed_at: z.date().optional(),
  due_date: z.date().optional(),
  metadata: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().optional(),
  process_instance_steps: z.array(z.unknown()),
  process_templates: z.unknown(),
  users: z.unknown().optional(),
  process_logs: z.array(z.unknown()),
  tasks: z.array(z.unknown())
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