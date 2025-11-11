import * as z from 'zod';
export const customersDeleteManyResultSchema = z.object({
  count: z.number()
});