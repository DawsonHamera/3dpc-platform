import * as z from 'zod';
export const activity_logsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    action_type: z.number(),
    table_name: z.number(),
    record_id: z.number(),
    result: z.number(),
    details: z.number(),
    created_at: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    user_id: z.number().nullable(),
    record_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    user_id: z.number().nullable(),
    record_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    user_id: z.number().int().nullable(),
    action_type: z.string().nullable(),
    table_name: z.string().nullable(),
    record_id: z.number().int().nullable(),
    result: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    user_id: z.number().int().nullable(),
    action_type: z.string().nullable(),
    table_name: z.string().nullable(),
    record_id: z.number().int().nullable(),
    result: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});