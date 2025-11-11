import * as z from 'zod';
export const productsUpdateManyResultSchema = z.object({
  count: z.number()
});