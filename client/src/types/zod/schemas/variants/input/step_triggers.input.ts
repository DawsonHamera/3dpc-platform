import * as z from 'zod';
import { step_triggers_trigger_typeSchema } from '../../enums/step_triggers_trigger_type.schema';
// prettier-ignore
export const step_triggersInputSchema = z.object({
    id: z.number().int(),
    step_action_id: z.number().int(),
    trigger_order: z.number().int(),
    trigger_type: step_triggers_trigger_typeSchema,
    trigger_config: z.string(),
    condition_rules: z.string().optional().nullable(),
    is_enabled: z.boolean().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    step_actions: z.unknown()
}).strict();

export type step_triggersInputType = z.infer<typeof step_triggersInputSchema>;
