import * as z from 'zod';
// prettier-ignore
export const process_template_stepsInputSchema = z.object({
    id: z.number().int(),
    process_template_id: z.number().int(),
    step_id: z.number().int(),
    step_order: z.number().int(),
    is_required: z.boolean().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    process_templates: z.unknown(),
    steps: z.unknown()
}).strict();

export type process_template_stepsInputType = z.infer<typeof process_template_stepsInputSchema>;
