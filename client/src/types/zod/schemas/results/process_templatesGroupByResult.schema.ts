import * as z from 'zod';
export const process_templatesGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  version: z.string(),
  estimated_duration: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    version: z.number(),
    category: z.number(),
    estimated_duration: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    deleted_at: z.number(),
    printers: z.number(),
    process_instances: z.number(),
    process_template_steps: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    estimated_duration: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    estimated_duration: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    version: z.string().nullable(),
    estimated_duration: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    version: z.string().nullable(),
    estimated_duration: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional()
}));