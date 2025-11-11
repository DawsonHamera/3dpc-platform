import * as z from 'zod';
import { steps_step_typeSchema } from '../../enums/steps_step_type.schema';
// prettier-ignore
export const stepsResultSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    is_critical: z.boolean().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    step_type: steps_step_typeSchema.nullable(),
    is_required: z.boolean().nullable(),
    deleted_at: z.date().nullable(),
    error_reports: z.array(z.unknown()),
    process_instance_steps: z.array(z.unknown()),
    process_template_steps: z.array(z.unknown()),
    step_actions: z.array(z.unknown()),
    step_content: z.array(z.unknown())
}).strict();

export type stepsResultType = z.infer<typeof stepsResultSchema>;
