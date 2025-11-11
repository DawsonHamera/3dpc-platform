import * as z from 'zod';
export const order_itemsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    order_id: z.number(),
    product_id: z.number(),
    quantity: z.number(),
    unit_price: z.number(),
    status: z.number(),
    total_price: z.number(),
    orders: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    order_id: z.number().nullable(),
    product_id: z.number().nullable(),
    quantity: z.number().nullable(),
    unit_price: z.number().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    order_id: z.number().nullable(),
    product_id: z.number().nullable(),
    quantity: z.number().nullable(),
    unit_price: z.number().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    order_id: z.number().int().nullable(),
    product_id: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    unit_price: z.number().nullable(),
    status: z.string().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    order_id: z.number().int().nullable(),
    product_id: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    unit_price: z.number().nullable(),
    status: z.string().nullable(),
    total_price: z.number().nullable()
  }).nullable().optional()});