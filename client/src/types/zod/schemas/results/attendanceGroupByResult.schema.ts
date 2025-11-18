import * as z from 'zod';
export const attendanceGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  event_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  rsvp_time: z.date(),
  arrival_time: z.date(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    event_id: z.number(),
    status: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    rsvp_time: z.number(),
    arrival_time: z.number(),
    event: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    user_id: z.number().nullable(),
    event_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    user_id: z.number().nullable(),
    event_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    user_id: z.number().int().nullable(),
    event_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    rsvp_time: z.date().nullable(),
    arrival_time: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    user_id: z.number().int().nullable(),
    event_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    rsvp_time: z.date().nullable(),
    arrival_time: z.date().nullable()
  }).nullable().optional()
}));