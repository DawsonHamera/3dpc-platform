import * as z from 'zod';
export const productsCreateManyResultSchema = z.object({
  count: z.number()
});