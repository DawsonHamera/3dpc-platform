import * as z from 'zod';
export const step_actionsFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  step_id: z.number().int(),
  action_order: z.number().int(),
  label: z.string(),
  action_type: z.string(),
  action_config: z.string().optional(),
  button_style: z.unknown().optional(),
  icon: z.string().optional(),
  is_enabled: z.boolean().optional(),
  confirmation_message: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  steps: z.unknown(),
  step_triggers: z.array(z.unknown())
}));