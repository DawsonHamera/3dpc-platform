import * as z from 'zod';
export const step_contentFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  step_id: z.number().int(),
  content_order: z.number().int(),
  content_type: z.unknown(),
  content_data: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  steps: z.unknown()
}));