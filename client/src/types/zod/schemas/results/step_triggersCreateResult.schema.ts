import * as z from 'zod';
export const step_triggersCreateResultSchema = z.object({
  id: z.number().int(),
  step_action_id: z.number().int(),
  trigger_order: z.number().int(),
  trigger_type: z.unknown(),
  trigger_config: z.string(),
  condition_rules: z.string().optional(),
  is_enabled: z.boolean().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  step_actions: z.unknown()
});