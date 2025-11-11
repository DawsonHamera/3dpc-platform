import * as z from 'zod';
export const ordersDeleteManyResultSchema = z.object({
  count: z.number()
});