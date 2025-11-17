import * as z from 'zod';
import { file_typeSchema } from '../../enums/file_type.schema';
// prettier-ignore
export const fileModelSchema = z.object({
    id: z.number().int(),
    original_name: z.string(),
    stored_name: z.string(),
    mime_type: z.string().nullable(),
    size: z.number().int(),
    path: z.string(),
    uploaded_by: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    description: z.string().nullable(),
    type: file_typeSchema,
    events: z.array(z.unknown()),
    uploader: z.unknown().nullable()
}).strict();

export type filePureType = z.infer<typeof fileModelSchema>;
