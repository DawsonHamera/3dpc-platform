import * as z from 'zod';
export const fileCreateManyResultSchema = z.object({
  count: z.number()
});