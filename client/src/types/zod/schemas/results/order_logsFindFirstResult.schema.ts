import * as z from 'zod';
export const order_logsFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  order_id: z.number().int(),
  log_timestamp: z.date().optional(),
  log_message: z.string(),
  log_details: z.string().optional(),
  orders: z.unknown()
}));