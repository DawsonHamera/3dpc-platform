import * as z from 'zod';
export const materialsDeleteManyResultSchema = z.object({
  count: z.number()
});