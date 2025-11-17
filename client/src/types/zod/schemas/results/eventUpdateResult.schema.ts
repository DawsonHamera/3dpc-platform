import * as z from 'zod';
export const eventUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  location: z.string(),
  start_time: z.date(),
  end_time: z.date(),
  image_file_id: z.number().int().optional(),
  is_featured: z.boolean().optional(),
  event_type: z.unknown().optional(),
  created_by: z.number().int(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
  verification_code: z.string(),
  attendances: z.array(z.unknown()),
  files: z.unknown().optional(),
  users: z.unknown()
}));