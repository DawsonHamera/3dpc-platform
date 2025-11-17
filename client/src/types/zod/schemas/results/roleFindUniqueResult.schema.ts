import * as z from 'zod';
export const roleFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  users: z.array(z.unknown())
}));