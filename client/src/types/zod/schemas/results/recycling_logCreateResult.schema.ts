import * as z from 'zod';
export const recycling_logCreateResultSchema = z.object({
  id: z.number().int(),
  type: z.unknown(),
  amount: z.number().int(),
  created_at: z.date(),
  user_id: z.number().int(),
  created_by: z.unknown()
});