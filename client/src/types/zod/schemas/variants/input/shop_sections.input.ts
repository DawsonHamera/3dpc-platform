import * as z from 'zod';
// prettier-ignore
export const shop_sectionsInputSchema = z.object({
    id: z.number().int(),
    name: z.string().optional().nullable(),
    label: z.string().optional().nullable(),
    order_index: z.number().int().optional().nullable(),
    products: z.array(z.unknown())
}).strict();

export type shop_sectionsInputType = z.infer<typeof shop_sectionsInputSchema>;
