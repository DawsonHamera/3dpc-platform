import * as z from 'zod';
// prettier-ignore
export const product_variantsInputSchema = z.object({
    id: z.number().int(),
    material_id: z.number().int().optional().nullable(),
    name: z.string(),
    image_file_id: z.number().int().optional().nullable(),
    background_color: z.string().optional().nullable(),
    model_color: z.string().optional().nullable(),
    product_id: z.number().int(),
    products: z.unknown()
}).strict();

export type product_variantsInputType = z.infer<typeof product_variantsInputSchema>;
