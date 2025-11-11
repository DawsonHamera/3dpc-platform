import * as z from 'zod';
export const ordersUpdateManyResultSchema = z.object({
  count: z.number()
});