import * as z from 'zod';
export const point_logsFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  change: z.number().int(),
  reason: z.string(),
  details: z.string().optional(),
  logged_at: z.date(),
  users: z.unknown()
}));