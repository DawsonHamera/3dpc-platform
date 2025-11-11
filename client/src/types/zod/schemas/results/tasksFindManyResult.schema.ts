import * as z from 'zod';
export const tasksFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  request_id: z.number().int(),
  model_id: z.number().int(),
  printer_id: z.number().int().optional(),
  material_slots: z.string(),
  quality: z.string().optional(),
  quantity: z.number().int(),
  status_id: z.number().int().optional(),
  assigned_user_id: z.number().int().optional(),
  comments: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
  scheduled_start_time: z.date().optional(),
  scheduled_end_time: z.date().optional(),
  process_instance_id: z.number().int().optional(),
  error_reports: z.array(z.unknown()),
  process_instances: z.unknown().optional(),
  users: z.unknown().optional(),
  models: z.unknown(),
  printers: z.unknown().optional(),
  requests: z.unknown(),
  task_statuses: z.unknown().optional()
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