import * as z from 'zod';
export const step_triggersFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});