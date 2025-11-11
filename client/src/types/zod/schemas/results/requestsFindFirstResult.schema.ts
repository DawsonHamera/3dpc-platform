import * as z from 'zod';
export const requestsFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  submitted_by: z.string().optional(),
  email: z.string().optional(),
  comments: z.string().optional(),
  status_id: z.number().int().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
  requested_date: z.date().optional(),
  due_date: z.date().optional(),
  priority: z.number().int().optional(),
  request_statuses: z.unknown().optional(),
  tasks: z.array(z.unknown())
}));