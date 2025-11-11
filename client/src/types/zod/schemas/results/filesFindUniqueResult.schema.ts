import * as z from 'zod';
export const filesFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  original_name: z.string(),
  stored_name: z.string(),
  mime_type: z.string().optional(),
  size: z.number().int(),
  path: z.string(),
  uploaded_by: z.number().int().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
  description: z.string().optional(),
  type: z.unknown(),
  events: z.array(z.unknown()),
  uploader: z.unknown().optional(),
  materials_materials_image_file_idTofiles: z.array(z.unknown()),
  materials_materials_texture_file_idTofiles: z.array(z.unknown()),
  printers: z.array(z.unknown())
}));