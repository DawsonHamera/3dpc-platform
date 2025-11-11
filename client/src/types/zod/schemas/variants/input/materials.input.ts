import * as z from 'zod';
// prettier-ignore
export const materialsInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    hex: z.string(),
    texture_file_id: z.number().int().optional().nullable(),
    image_file_id: z.number().int().optional().nullable(),
    type: z.string().optional().nullable(),
    vendor: z.string(),
    min_temp: z.number().optional().nullable(),
    max_temp: z.number().optional().nullable(),
    details: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    texture_url: z.string().optional().nullable(),
    cost: z.number().optional().nullable(),
    cost_unit: z.string().optional().nullable(),
    supplier: z.string().optional().nullable(),
    safety_data: z.string().optional().nullable(),
    density: z.number().optional().nullable(),
    files_materials_image_file_idTofiles: z.unknown().optional().nullable(),
    files_materials_texture_file_idTofiles: z.unknown().optional().nullable(),
    printers: z.array(z.unknown())
}).strict();

export type materialsInputType = z.infer<typeof materialsInputSchema>;
