import * as z from 'zod';
// prettier-ignore
export const order_itemsModelSchema = z.object({
    id: z.number().int(),
    order_id: z.number().int(),
    product_id: z.number().int(),
    quantity: z.number().int(),
    unit_price: z.number().nullable(),
    status: z.string().nullable(),
    total_price: z.number().nullable(),
    orders: z.unknown()
}).strict();

export type order_itemsPureType = z.infer<typeof order_itemsModelSchema>;
