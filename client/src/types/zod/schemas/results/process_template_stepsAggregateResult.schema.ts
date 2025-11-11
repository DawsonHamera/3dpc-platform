import * as z from 'zod';
export const process_template_stepsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    process_template_id: z.number(),
    step_id: z.number(),
    step_order: z.number(),
    is_required: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    process_templates: z.number(),
    steps: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    process_template_id: z.number().nullable(),
    step_id: z.number().nullable(),
    step_order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    process_template_id: z.number().nullable(),
    step_id: z.number().nullable(),
    step_order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    process_template_id: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    step_order: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    process_template_id: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    step_order: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});