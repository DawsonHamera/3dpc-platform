import * as z from 'zod';
export const order_logsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  order_id: z.number().int(),
  log_timestamp: z.date(),
  log_message: z.string(),
  log_details: z.string(),
  _count: z.object({
    id: z.number(),
    order_id: z.number(),
    log_timestamp: z.number(),
    log_message: z.number(),
    log_details: z.number(),
    orders: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    order_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    order_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    order_id: z.number().int().nullable(),
    log_timestamp: z.date().nullable(),
    log_message: z.string().nullable(),
    log_details: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    order_id: z.number().int().nullable(),
    log_timestamp: z.date().nullable(),
    log_message: z.string().nullable(),
    log_details: z.string().nullable()
  }).nullable().optional()
}));