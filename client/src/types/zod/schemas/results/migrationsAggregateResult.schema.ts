import * as z from 'zod';
export const migrationsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    version: z.number(),
    class: z.number(),
    group: z.number(),
    namespace: z.number(),
    time: z.number(),
    batch: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    time: z.number().nullable(),
    batch: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    time: z.number().nullable(),
    batch: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    version: z.string().nullable(),
    class: z.string().nullable(),
    group: z.string().nullable(),
    namespace: z.string().nullable(),
    time: z.number().int().nullable(),
    batch: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    version: z.string().nullable(),
    class: z.string().nullable(),
    group: z.string().nullable(),
    namespace: z.string().nullable(),
    time: z.number().int().nullable(),
    batch: z.number().int().nullable()
  }).nullable().optional()});