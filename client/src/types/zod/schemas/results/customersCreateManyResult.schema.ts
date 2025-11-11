import * as z from 'zod';
export const customersCreateManyResultSchema = z.object({
  count: z.number()
});