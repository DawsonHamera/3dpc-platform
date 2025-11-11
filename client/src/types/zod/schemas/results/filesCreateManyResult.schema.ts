import * as z from 'zod';
export const filesCreateManyResultSchema = z.object({
  count: z.number()
});