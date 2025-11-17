import * as z from 'zod';
export const fileGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  original_name: z.string(),
  stored_name: z.string(),
  mime_type: z.string(),
  size: z.number().int(),
  path: z.string(),
  uploaded_by: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date(),
  description: z.string(),
  _count: z.object({
    id: z.number(),
    original_name: z.number(),
    stored_name: z.number(),
    mime_type: z.number(),
    size: z.number(),
    path: z.number(),
    uploaded_by: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    deleted_at: z.number(),
    description: z.number(),
    type: z.number(),
    events: z.number(),
    uploader: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    size: z.number().nullable(),
    uploaded_by: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    size: z.number().nullable(),
    uploaded_by: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    original_name: z.string().nullable(),
    stored_name: z.string().nullable(),
    mime_type: z.string().nullable(),
    size: z.number().int().nullable(),
    path: z.string().nullable(),
    uploaded_by: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    description: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    original_name: z.string().nullable(),
    stored_name: z.string().nullable(),
    mime_type: z.string().nullable(),
    size: z.number().int().nullable(),
    path: z.string().nullable(),
    uploaded_by: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    description: z.string().nullable()
  }).nullable().optional()
}));