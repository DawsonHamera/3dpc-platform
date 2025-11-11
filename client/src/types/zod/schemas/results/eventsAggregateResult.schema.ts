import * as z from 'zod';
export const eventsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    location: z.number(),
    start_time: z.number(),
    end_time: z.number(),
    image_file_id: z.number(),
    is_featured: z.number(),
    event_type: z.number(),
    created_by: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    deleted_at: z.number(),
    verification_code: z.number(),
    attendances: z.number(),
    files: z.number(),
    users: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    image_file_id: z.number().nullable(),
    created_by: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    image_file_id: z.number().nullable(),
    created_by: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    location: z.string().nullable(),
    start_time: z.date().nullable(),
    end_time: z.date().nullable(),
    image_file_id: z.number().int().nullable(),
    created_by: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    verification_code: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    location: z.string().nullable(),
    start_time: z.date().nullable(),
    end_time: z.date().nullable(),
    image_file_id: z.number().int().nullable(),
    created_by: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    verification_code: z.string().nullable()
  }).nullable().optional()});