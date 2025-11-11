import * as z from 'zod';

export const process_templates_categorySchema = z.enum(['printing', 'maintenance', 'quality_check', 'post_processing'])

export type process_templates_category = z.infer<typeof process_templates_categorySchema>;