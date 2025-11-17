import * as z from 'zod';
export const attendanceUpsertResultSchema = z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  event_id: z.number().int(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  arrival_time: z.date().optional(),
  event: z.unknown(),
  user: z.unknown()
});