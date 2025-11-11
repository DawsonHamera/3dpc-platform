import * as z from 'zod';
export const gradesCreateResultSchema = z.object({
  id: z.number().int(),
  grade: z.unknown(),
  description: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  users: z.array(z.unknown())
});