import * as z from 'zod';
export const customersAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    first_name: z.number(),
    last_name: z.number(),
    email_address: z.number(),
    ip_address: z.number(),
    session_id: z.number(),
    first_seen: z.number(),
    last_seen: z.number(),
    preferred_shipping_address: z.number(),
    preferred_shipping_method: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    session_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    session_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    email_address: z.string().nullable(),
    ip_address: z.string().nullable(),
    session_id: z.number().int().nullable(),
    first_seen: z.date().nullable(),
    last_seen: z.date().nullable(),
    preferred_shipping_address: z.string().nullable(),
    preferred_shipping_method: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    email_address: z.string().nullable(),
    ip_address: z.string().nullable(),
    session_id: z.number().int().nullable(),
    first_seen: z.date().nullable(),
    last_seen: z.date().nullable(),
    preferred_shipping_address: z.string().nullable(),
    preferred_shipping_method: z.string().nullable()
  }).nullable().optional()});