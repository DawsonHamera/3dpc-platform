import * as z from 'zod';
export const ordersAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    customer_id: z.number(),
    order_date: z.number(),
    requested_by_date: z.number(),
    order_status: z.number(),
    payment_status: z.number(),
    shipping_method: z.number(),
    shipping_address: z.number(),
    total_price: z.number(),
    order_items: z.number(),
    order_logs: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    customer_id: z.number().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    customer_id: z.number().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    customer_id: z.number().int().nullable(),
    order_date: z.date().nullable(),
    requested_by_date: z.date().nullable(),
    order_status: z.string().nullable(),
    payment_status: z.string().nullable(),
    shipping_method: z.string().nullable(),
    shipping_address: z.string().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    customer_id: z.number().int().nullable(),
    order_date: z.date().nullable(),
    requested_by_date: z.date().nullable(),
    order_status: z.string().nullable(),
    payment_status: z.string().nullable(),
    shipping_method: z.string().nullable(),
    shipping_address: z.string().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional()});