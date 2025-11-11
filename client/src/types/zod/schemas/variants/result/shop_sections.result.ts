import * as z from 'zod';
// prettier-ignore
export const shop_sectionsResultSchema = z.object({
    id: z.number().int(),
    name: z.string().nullable(),
    label: z.string().nullable(),
    order_index: z.number().int().nullable(),
    products: z.array(z.unknown())
}).strict();

export type shop_sectionsResultType = z.infer<typeof shop_sectionsResultSchema>;
