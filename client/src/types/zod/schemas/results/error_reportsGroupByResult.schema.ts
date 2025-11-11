import * as z from 'zod';
export const error_reportsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  task_id: z.number().int(),
  submitted_by: z.number().int(),
  step_id: z.number().int(),
  description: z.string(),
  image_url: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    task_id: z.number(),
    submitted_by: z.number(),
    step_id: z.number(),
    description: z.number(),
    image_url: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    steps: z.number(),
    users: z.number(),
    tasks: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    task_id: z.number().nullable(),
    submitted_by: z.number().nullable(),
    step_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    task_id: z.number().nullable(),
    submitted_by: z.number().nullable(),
    step_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    task_id: z.number().int().nullable(),
    submitted_by: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    description: z.string().nullable(),
    image_url: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    task_id: z.number().int().nullable(),
    submitted_by: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    description: z.string().nullable(),
    image_url: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));