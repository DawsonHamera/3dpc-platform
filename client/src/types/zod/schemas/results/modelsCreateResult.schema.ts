import * as z from 'zod';
export const modelsCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  image_file_id: z.number().int(),
  model_file_id: z.number().int(),
  material_slots: z.string(),
  estimated_duration: z.number().int().optional(),
  estimated_filament: z.number().optional(),
  description: z.string().optional(),
  tags: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
  products: z.array(z.unknown()),
  tasks: z.array(z.unknown())
});