import * as z from 'zod';
// prettier-ignore
export const order_itemsInputSchema = z.object({
    id: z.number().int(),
    order_id: z.number().int(),
    product_id: z.number().int(),
    quantity: z.number().int(),
    unit_price: z.number().optional().nullable(),
    status: z.string().optional().nullable(),
    total_price: z.number().optional().nullable(),
    orders: z.unknown()
}).strict();

export type order_itemsInputType = z.infer<typeof order_itemsInputSchema>;
