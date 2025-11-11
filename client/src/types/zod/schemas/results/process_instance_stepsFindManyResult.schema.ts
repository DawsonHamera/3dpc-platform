import * as z from 'zod';
export const process_instance_stepsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  process_instance_id: z.number().int(),
  step_id: z.number().int(),
  step_order: z.number().int(),
  status: z.unknown(),
  started_at: z.date().optional(),
  completed_at: z.date().optional(),
  assigned_user_id: z.number().int().optional(),
  is_required: z.boolean(),
  input_data: z.string().optional(),
  output_data: z.string().optional(),
  metadata: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().optional(),
  due_date: z.date().optional(),
  notes: z.string().optional(),
  process_instances: z.unknown(),
  steps: z.unknown(),
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