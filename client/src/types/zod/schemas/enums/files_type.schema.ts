import * as z from 'zod';

export const files_typeSchema = z.enum(['image', 'model', 'texture', 'document', 'other'])

export type files_type = z.infer<typeof files_typeSchema>;