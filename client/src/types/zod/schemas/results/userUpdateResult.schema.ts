import * as z from 'zod';
export const userUpdateResultSchema = z.nullable(z.object({
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
}));