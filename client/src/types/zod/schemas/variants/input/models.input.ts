import * as z from 'zod';
// prettier-ignore
export const modelsInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    image_file_id: z.number().int(),
    model_file_id: z.number().int(),
    material_slots: z.string(),
    estimated_duration: z.number().int().optional().nullable(),
    estimated_filament: z.number().optional().nullable(),
    description: z.string().optional().nullable(),
    tags: z.string(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    products: z.array(z.unknown()),
    tasks: z.array(z.unknown())
}).strict();

export type modelsInputType = z.infer<typeof modelsInputSchema>;
