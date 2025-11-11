import * as z from 'zod';
// prettier-ignore
export const materialsModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    hex: z.string(),
    texture_file_id: z.number().int().nullable(),
    image_file_id: z.number().int().nullable(),
    type: z.string().nullable(),
    vendor: z.string(),
    min_temp: z.number().nullable(),
    max_temp: z.number().nullable(),
    details: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    texture_url: z.string().nullable(),
    cost: z.number().nullable(),
    cost_unit: z.string().nullable(),
    supplier: z.string().nullable(),
    safety_data: z.string().nullable(),
    density: z.number().nullable(),
    files_materials_image_file_idTofiles: z.unknown().nullable(),
    files_materials_texture_file_idTofiles: z.unknown().nullable(),
    printers: z.array(z.unknown())
}).strict();

export type materialsPureType = z.infer<typeof materialsModelSchema>;
