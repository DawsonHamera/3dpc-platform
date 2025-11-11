import * as z from 'zod';
export const process_logsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  process_instance_id: z.number().int(),
  step_order: z.number().int(),
  message: z.string(),
  data: z.string(),
  user_id: z.number().int(),
  created_at: z.date(),
  deleted_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    process_instance_id: z.number(),
    step_order: z.number(),
    level: z.number(),
    action: z.number(),
    message: z.number(),
    data: z.number(),
    user_id: z.number(),
    created_at: z.number(),
    deleted_at: z.number(),
    updated_at: z.number(),
    process_instances: z.number(),
    users: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    process_instance_id: z.number().nullable(),
    step_order: z.number().nullable(),
    user_id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    process_instance_id: z.number().nullable(),
    step_order: z.number().nullable(),
    user_id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    process_instance_id: z.number().int().nullable(),
    step_order: z.number().int().nullable(),
    message: z.string().nullable(),
    data: z.string().nullable(),
    user_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    process_instance_id: z.number().int().nullable(),
    step_order: z.number().int().nullable(),
    message: z.string().nullable(),
    data: z.string().nullable(),
    user_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));