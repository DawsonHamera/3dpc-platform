import * as z from 'zod';
// prettier-ignore
export const ordersInputSchema = z.object({
    id: z.number().int(),
    customer_id: z.number().int().optional().nullable(),
    order_date: z.date().optional().nullable(),
    requested_by_date: z.date().optional().nullable(),
    order_status: z.string().optional().nullable(),
    payment_status: z.string().optional().nullable(),
    shipping_method: z.string().optional().nullable(),
    shipping_address: z.string().optional().nullable(),
    total_price: z.number().optional().nullable(),
    order_items: z.array(z.unknown()),
    order_logs: z.array(z.unknown())
}).strict();

export type ordersInputType = z.infer<typeof ordersInputSchema>;
