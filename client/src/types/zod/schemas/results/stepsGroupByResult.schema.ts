import * as z from 'zod';
export const stepsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  is_critical: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  is_required: z.boolean(),
  deleted_at: z.date(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    is_critical: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    step_type: z.number(),
    is_required: z.number(),
    deleted_at: z.number(),
    error_reports: z.number(),
    process_instance_steps: z.number(),
    process_template_steps: z.number(),
    step_actions: z.number(),
    step_content: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional()
}));