import * as z from 'zod';
export const step_actionsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  step_id: z.number().int(),
  action_order: z.number().int(),
  label: z.string(),
  action_type: z.string(),
  action_config: z.string(),
  icon: z.string(),
  is_enabled: z.boolean(),
  confirmation_message: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    step_id: z.number(),
    action_order: z.number(),
    label: z.number(),
    action_type: z.number(),
    action_config: z.number(),
    button_style: z.number(),
    icon: z.number(),
    is_enabled: z.number(),
    confirmation_message: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    steps: z.number(),
    step_triggers: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    step_id: z.number().nullable(),
    action_order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    step_id: z.number().nullable(),
    action_order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    action_order: z.number().int().nullable(),
    label: z.string().nullable(),
    action_type: z.string().nullable(),
    action_config: z.string().nullable(),
    icon: z.string().nullable(),
    confirmation_message: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    step_id: z.number().int().nullable(),
    action_order: z.number().int().nullable(),
    label: z.string().nullable(),
    action_type: z.string().nullable(),
    action_config: z.string().nullable(),
    icon: z.string().nullable(),
    confirmation_message: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));