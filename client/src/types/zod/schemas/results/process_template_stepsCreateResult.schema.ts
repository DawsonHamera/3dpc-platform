import * as z from 'zod';
export const process_template_stepsCreateResultSchema = z.object({
  id: z.number().int(),
  process_template_id: z.number().int(),
  step_id: z.number().int(),
  step_order: z.number().int(),
  is_required: z.boolean().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  process_templates: z.unknown(),
  steps: z.unknown()
});