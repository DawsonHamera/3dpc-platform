import * as z from 'zod';
export const printersCreateManyResultSchema = z.object({
  count: z.number()
});