import * as z from 'zod';

export const step_actions_button_styleSchema = z.enum(['primary', 'secondary', 'success', 'warning', 'danger'])

export type step_actions_button_style = z.infer<typeof step_actions_button_styleSchema>;