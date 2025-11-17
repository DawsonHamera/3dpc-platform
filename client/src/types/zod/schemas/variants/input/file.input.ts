import * as z from 'zod';
import { file_typeSchema } from '../../enums/file_type.schema';
// prettier-ignore
export const fileInputSchema = z.object({
    id: z.number().int(),
    original_name: z.string(),
    stored_name: z.string(),
    mime_type: z.string().optional().nullable(),
    size: z.number().int(),
    path: z.string(),
    uploaded_by: z.number().int().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    description: z.string().optional().nullable(),
    type: file_typeSchema,
    events: z.array(z.unknown()),
    uploader: z.unknown().optional().nullable()
}).strict();

export type fileInputType = z.infer<typeof fileInputSchema>;
