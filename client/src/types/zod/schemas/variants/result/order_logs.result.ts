import * as z from 'zod';
// prettier-ignore
export const order_logsResultSchema = z.object({
    id: z.number().int(),
    order_id: z.number().int(),
    log_timestamp: z.date().nullable(),
    log_message: z.string(),
    log_details: z.string().nullable(),
    orders: z.unknown()
}).strict();

export type order_logsResultType = z.infer<typeof order_logsResultSchema>;
