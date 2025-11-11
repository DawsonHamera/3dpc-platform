import * as z from 'zod';
// prettier-ignore
export const order_logsInputSchema = z.object({
    id: z.number().int(),
    order_id: z.number().int(),
    log_timestamp: z.date().optional().nullable(),
    log_message: z.string(),
    log_details: z.string().optional().nullable(),
    orders: z.unknown()
}).strict();

export type order_logsInputType = z.infer<typeof order_logsInputSchema>;
