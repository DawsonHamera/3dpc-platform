import * as z from 'zod';
// prettier-ignore
export const ordersModelSchema = z.object({
    id: z.number().int(),
    customer_id: z.number().int().nullable(),
    order_date: z.date().nullable(),
    requested_by_date: z.date().nullable(),
    order_status: z.string().nullable(),
    payment_status: z.string().nullable(),
    shipping_method: z.string().nullable(),
    shipping_address: z.string().nullable(),
    total_price: z.number().nullable(),
    order_items: z.array(z.unknown()),
    order_logs: z.array(z.unknown())
}).strict();

export type ordersPureType = z.infer<typeof ordersModelSchema>;
