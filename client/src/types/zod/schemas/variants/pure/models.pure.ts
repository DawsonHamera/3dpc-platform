import * as z from 'zod';
// prettier-ignore
export const modelsModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    image_file_id: z.number().int(),
    model_file_id: z.number().int(),
    material_slots: z.string(),
    estimated_duration: z.number().int().nullable(),
    estimated_filament: z.number().nullable(),
    description: z.string().nullable(),
    tags: z.string(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    products: z.array(z.unknown()),
    tasks: z.array(z.unknown())
}).strict();

export type modelsPureType = z.infer<typeof modelsModelSchema>;
