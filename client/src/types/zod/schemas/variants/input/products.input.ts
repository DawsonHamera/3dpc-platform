import * as z from 'zod';
// prettier-ignore
export const productsInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    model_id: z.number().int(),
    default_variant_id: z.number().int().optional().nullable(),
    custom_options: z.string().optional().nullable(),
    tags: z.string().optional().nullable(),
    section_id: z.number().int().optional().nullable(),
    product_variants: z.array(z.unknown()),
    models: z.unknown(),
    shop_sections: z.unknown().optional().nullable()
}).strict();

export type productsInputType = z.infer<typeof productsInputSchema>;
