import * as z from 'zod';

export const steps_step_typeSchema = z.enum(['manual', 'automatic', 'conditional', 'timer'])

export type steps_step_type = z.infer<typeof steps_step_typeSchema>;