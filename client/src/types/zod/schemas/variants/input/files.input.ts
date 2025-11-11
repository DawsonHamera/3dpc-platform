import * as z from 'zod';
import { files_typeSchema } from '../../enums/files_type.schema';
// prettier-ignore
export const filesInputSchema = z.object({
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
    type: files_typeSchema,
    events: z.array(z.unknown()),
    uploader: z.unknown().optional().nullable(),
    materials_materials_image_file_idTofiles: z.array(z.unknown()),
    materials_materials_texture_file_idTofiles: z.array(z.unknown()),
    printers: z.array(z.unknown())
}).strict();

export type filesInputType = z.infer<typeof filesInputSchema>;
