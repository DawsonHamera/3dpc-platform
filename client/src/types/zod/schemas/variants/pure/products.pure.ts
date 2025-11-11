import * as z from 'zod';
// prettier-ignore
export const productsModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    model_id: z.number().int(),
    default_variant_id: z.number().int().nullable(),
    custom_options: z.string().nullable(),
    tags: z.string().nullable(),
    section_id: z.number().int().nullable(),
    product_variants: z.array(z.unknown()),
    models: z.unknown(),
    shop_sections: z.unknown().nullable()
}).strict();

export type productsPureType = z.infer<typeof productsModelSchema>;
