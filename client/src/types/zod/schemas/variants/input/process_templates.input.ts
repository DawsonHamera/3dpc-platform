import * as z from 'zod';
import { process_templates_categorySchema } from '../../enums/process_templates_category.schema';
// prettier-ignore
export const process_templatesInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    version: z.string().optional().nullable(),
    category: process_templates_categorySchema.optional().nullable(),
    estimated_duration: z.number().int().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    deleted_at: z.date().optional().nullable(),
    printers: z.array(z.unknown()),
    process_instances: z.array(z.unknown()),
    process_template_steps: z.array(z.unknown())
}).strict();

export type process_templatesInputType = z.infer<typeof process_templatesInputSchema>;
