import * as z from 'zod';
export const attendanceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  event_id: z.number().int(),
  status: z.unknown(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  rsvp_time: z.date().optional(),
  arrival_time: z.date().optional(),
  event: z.unknown(),
  user: z.unknown()
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