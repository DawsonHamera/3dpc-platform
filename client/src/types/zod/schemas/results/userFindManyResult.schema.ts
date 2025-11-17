import * as z from 'zod';
export const userFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  role_id: z.number().int(),
  grade: z.unknown(),
  score: z.number().int(),
  last_active: z.date().optional(),
  attendances: z.array(z.unknown()),
  events: z.array(z.unknown()),
  files: z.array(z.unknown()),
  role: z.unknown(),
  activity_logs: z.array(z.unknown()),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional()
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