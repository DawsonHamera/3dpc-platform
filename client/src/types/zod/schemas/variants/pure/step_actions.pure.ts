import * as z from 'zod';
import { step_actions_button_styleSchema } from '../../enums/step_actions_button_style.schema';
// prettier-ignore
export const step_actionsModelSchema = z.object({
    id: z.number().int(),
    step_id: z.number().int(),
    action_order: z.number().int(),
    label: z.string(),
    action_type: z.string(),
    action_config: z.string().nullable(),
    button_style: step_actions_button_styleSchema.nullable(),
    icon: z.string().nullable(),
    is_enabled: z.boolean().nullable(),
    confirmation_message: z.string().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    steps: z.unknown(),
    step_triggers: z.array(z.unknown())
}).strict();

export type step_actionsPureType = z.infer<typeof step_actionsModelSchema>;
