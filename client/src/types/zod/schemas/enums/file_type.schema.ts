import * as z from 'zod';

export const file_typeSchema = z.enum(['image', 'model', 'texture', 'document', 'other'])

export type file_type = z.infer<typeof file_typeSchema>;