import * as z from 'zod';
export const task_statusesDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  tasks: z.array(z.unknown())
}));