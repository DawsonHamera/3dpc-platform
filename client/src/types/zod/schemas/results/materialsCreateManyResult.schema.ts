import * as z from 'zod';
export const materialsCreateManyResultSchema = z.object({
  count: z.number()
});