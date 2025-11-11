import * as z from 'zod';
export const modelsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    image_file_id: z.number(),
    model_file_id: z.number(),
    material_slots: z.number(),
    estimated_duration: z.number(),
    estimated_filament: z.number(),
    description: z.number(),
    tags: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    deleted_at: z.number(),
    products: z.number(),
    tasks: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    image_file_id: z.number().nullable(),
    model_file_id: z.number().nullable(),
    estimated_duration: z.number().nullable(),
    estimated_filament: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    image_file_id: z.number().nullable(),
    model_file_id: z.number().nullable(),
    estimated_duration: z.number().nullable(),
    estimated_filament: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    image_file_id: z.number().int().nullable(),
    model_file_id: z.number().int().nullable(),
    material_slots: z.string().nullable(),
    estimated_duration: z.number().int().nullable(),
    estimated_filament: z.number().nullable(),
    description: z.string().nullable(),
    tags: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    image_file_id: z.number().int().nullable(),
    model_file_id: z.number().int().nullable(),
    material_slots: z.string().nullable(),
    estimated_duration: z.number().int().nullable(),
    estimated_filament: z.number().nullable(),
    description: z.string().nullable(),
    tags: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional()});