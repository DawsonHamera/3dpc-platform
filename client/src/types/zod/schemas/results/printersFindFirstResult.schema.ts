import * as z from 'zod';
export const printersFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  status_id: z.number().int(),
  name: z.string(),
  location: z.string().optional(),
  owner: z.string().optional(),
  details: z.string().optional(),
  image_id: z.number().int().optional(),
  material_id: z.number().int().optional(),
  process_template_id: z.number().int().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
  process_templates: z.unknown().optional(),
  files: z.unknown().optional(),
  materials: z.unknown().optional(),
  printer_statuses: z.unknown(),
  tasks: z.array(z.unknown())
}));