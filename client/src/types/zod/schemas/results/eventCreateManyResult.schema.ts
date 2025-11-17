import * as z from 'zod';
export const eventCreateManyResultSchema = z.object({
  count: z.number()
});