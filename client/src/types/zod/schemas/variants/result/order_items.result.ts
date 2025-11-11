import * as z from 'zod';
// prettier-ignore
export const order_itemsResultSchema = z.object({
    id: z.number().int(),
    order_id: z.number().int(),
    product_id: z.number().int(),
    quantity: z.number().int(),
    unit_price: z.number().nullable(),
    status: z.string().nullable(),
    total_price: z.number().nullable(),
    orders: z.unknown()
}).strict();

export type order_itemsResultType = z.infer<typeof order_itemsResultSchema>;
