import * as z from 'zod';
import { process_templates_categorySchema } from '../../enums/process_templates_category.schema';
// prettier-ignore
export const process_templatesResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    version: z.string().nullable(),
    category: process_templates_categorySchema.nullable(),
    estimated_duration: z.number().int().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    deleted_at: z.date().nullable(),
    printers: z.array(z.unknown()),
    process_instances: z.array(z.unknown()),
    process_template_steps: z.array(z.unknown())
}).strict();

export type process_templatesResultType = z.infer<typeof process_templatesResultSchema>;
