import * as z from 'zod';
export const ordersCreateManyResultSchema = z.object({
  count: z.number()
});