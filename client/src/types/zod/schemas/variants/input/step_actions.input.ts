import * as z from 'zod';
import { step_actions_button_styleSchema } from '../../enums/step_actions_button_style.schema';
// prettier-ignore
export const step_actionsInputSchema = z.object({
    id: z.number().int(),
    step_id: z.number().int(),
    action_order: z.number().int(),
    label: z.string(),
    action_type: z.string(),
    action_config: z.string().optional().nullable(),
    button_style: step_actions_button_styleSchema.optional().nullable(),
    icon: z.string().optional().nullable(),
    is_enabled: z.boolean().optional().nullable(),
    confirmation_message: z.string().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    steps: z.unknown(),
    step_triggers: z.array(z.unknown())
}).strict();

export type step_actionsInputType = z.infer<typeof step_actionsInputSchema>;
