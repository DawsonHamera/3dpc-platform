import * as z from 'zod';

export const step_content_content_typeSchema = z.enum(['text', 'image', 'video', 'file', 'link', 'template_variable'])

export type step_content_content_type = z.infer<typeof step_content_content_typeSchema>;