import * as z from 'zod';
export const point_logsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    change: z.number(),
    reason: z.number(),
    details: z.number(),
    logged_at: z.number(),
    users: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    user_id: z.number().nullable(),
    change: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    user_id: z.number().nullable(),
    change: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    user_id: z.number().int().nullable(),
    change: z.number().int().nullable(),
    reason: z.string().nullable(),
    details: z.string().nullable(),
    logged_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    user_id: z.number().int().nullable(),
    change: z.number().int().nullable(),
    reason: z.string().nullable(),
    details: z.string().nullable(),
    logged_at: z.date().nullable()
  }).nullable().optional()});