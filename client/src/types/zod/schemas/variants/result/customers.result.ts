import * as z from 'zod';
// prettier-ignore
export const customersResultSchema = z.object({
    id: z.number().int(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    email_address: z.string().nullable(),
    ip_address: z.string().nullable(),
    session_id: z.number().int().nullable(),
    first_seen: z.date().nullable(),
    last_seen: z.date().nullable(),
    preferred_shipping_address: z.string().nullable(),
    preferred_shipping_method: z.string().nullable()
}).strict();

export type customersResultType = z.infer<typeof customersResultSchema>;
