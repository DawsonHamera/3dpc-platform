import * as z from 'zod';
export const recycling_logAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    type: z.number(),
    amount: z.number(),
    created_at: z.number(),
    user_id: z.number(),
    created_by: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    amount: z.number().nullable(),
    user_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    amount: z.number().nullable(),
    user_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    amount: z.number().int().nullable(),
    created_at: z.date().nullable(),
    user_id: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    amount: z.number().int().nullable(),
    created_at: z.date().nullable(),
    user_id: z.number().int().nullable()
  }).nullable().optional()});