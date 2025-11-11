import * as z from 'zod';
export const usersFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  role_id: z.number().int(),
  grade_id: z.number().int().optional(),
  score: z.number().int(),
  last_active: z.date().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
  attendances: z.array(z.unknown()),
  error_reports: z.array(z.unknown()),
  events: z.array(z.unknown()),
  files: z.array(z.unknown()),
  point_logs: z.array(z.unknown()),
  process_instance_steps: z.array(z.unknown()),
  process_instances: z.array(z.unknown()),
  process_logs: z.array(z.unknown()),
  tasks: z.array(z.unknown()),
  grade: z.unknown().optional(),
  role: z.unknown(),
  activity_logs: z.array(z.unknown())
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