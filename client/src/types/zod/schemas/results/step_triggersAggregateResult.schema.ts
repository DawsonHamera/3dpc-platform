import * as z from 'zod';
export const step_triggersAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    step_action_id: z.number(),
    trigger_order: z.number(),
    trigger_type: z.number(),
    trigger_config: z.number(),
    condition_rules: z.number(),
    is_enabled: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    step_actions: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    step_action_id: z.number().nullable(),
    trigger_order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    step_action_id: z.number().nullable(),
    trigger_order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    step_action_id: z.number().int().nullable(),
    trigger_order: z.number().int().nullable(),
    trigger_config: z.string().nullable(),
    condition_rules: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    step_action_id: z.number().int().nullable(),
    trigger_order: z.number().int().nullable(),
    trigger_config: z.string().nullable(),
    condition_rules: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});