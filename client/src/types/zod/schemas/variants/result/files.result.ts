import * as z from 'zod';
import { files_typeSchema } from '../../enums/files_type.schema';
// prettier-ignore
export const filesResultSchema = z.object({
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
    type: files_typeSchema,
    events: z.array(z.unknown()),
    uploader: z.unknown().nullable(),
    materials_materials_image_file_idTofiles: z.array(z.unknown()),
    materials_materials_texture_file_idTofiles: z.array(z.unknown()),
    printers: z.array(z.unknown())
}).strict();

export type filesResultType = z.infer<typeof filesResultSchema>;
