import * as z from 'zod';
import { steps_step_typeSchema } from '../../enums/steps_step_type.schema';
// prettier-ignore
export const stepsInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().optional().nullable(),
    is_critical: z.boolean().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    step_type: steps_step_typeSchema.optional().nullable(),
    is_required: z.boolean().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    error_reports: z.array(z.unknown()),
    process_instance_steps: z.array(z.unknown()),
    process_template_steps: z.array(z.unknown()),
    step_actions: z.array(z.unknown()),
    step_content: z.array(z.unknown())
}).strict();

export type stepsInputType = z.infer<typeof stepsInputSchema>;
