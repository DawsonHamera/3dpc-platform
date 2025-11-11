import * as z from 'zod';
export const productsDeleteManyResultSchema = z.object({
  count: z.number()
});