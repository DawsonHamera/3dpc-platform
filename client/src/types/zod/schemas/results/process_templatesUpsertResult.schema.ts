import * as z from 'zod';
export const process_templatesUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  version: z.string().optional(),
  category: z.unknown().optional(),
  estimated_duration: z.number().int().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().optional(),
  printers: z.array(z.unknown()),
  process_instances: z.array(z.unknown()),
  process_template_steps: z.array(z.unknown())
});