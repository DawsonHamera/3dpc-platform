import * as z from 'zod';
export const step_contentGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  step_id: z.number().int(),
  content_order: z.number().int(),
  content_data: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    step_id: z.number(),
    content_order: z.number(),
    content_type: z.number(),
    content_data: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    steps: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    step_id: z.number().nullable(),
    content_order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    step_id: z.number().nullable(),
    content_order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    content_order: z.number().int().nullable(),
    content_data: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    content_order: z.number().int().nullable(),
    content_data: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));