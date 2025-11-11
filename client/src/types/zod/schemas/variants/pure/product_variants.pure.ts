import * as z from 'zod';
// prettier-ignore
export const product_variantsModelSchema = z.object({
    id: z.number().int(),
    material_id: z.number().int().nullable(),
    name: z.string(),
    image_file_id: z.number().int().nullable(),
    background_color: z.string().nullable(),
    model_color: z.string().nullable(),
    product_id: z.number().int(),
    products: z.unknown()
}).strict();

export type product_variantsPureType = z.infer<typeof product_variantsModelSchema>;
