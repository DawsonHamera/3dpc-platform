import * as z from 'zod';
// prettier-ignore
export const customersInputSchema = z.object({
    id: z.number().int(),
    first_name: z.string().optional().nullable(),
    last_name: z.string().optional().nullable(),
    email_address: z.string().optional().nullable(),
    ip_address: z.string().optional().nullable(),
    session_id: z.number().int().optional().nullable(),
    first_seen: z.date().optional().nullable(),
    last_seen: z.date().optional().nullable(),
    preferred_shipping_address: z.string().optional().nullable(),
    preferred_shipping_method: z.string().optional().nullable()
}).strict();

export type customersInputType = z.infer<typeof customersInputSchema>;
