import * as z from 'zod';
export const stepsUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  is_critical: z.boolean().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  step_type: z.unknown().optional(),
  is_required: z.boolean().optional(),
  deleted_at: z.date().optional(),
  error_reports: z.array(z.unknown()),
  process_instance_steps: z.array(z.unknown()),
  process_template_steps: z.array(z.unknown()),
  step_actions: z.array(z.unknown()),
  step_content: z.array(z.unknown())
}));