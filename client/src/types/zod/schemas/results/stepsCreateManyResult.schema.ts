import * as z from 'zod';
export const stepsCreateManyResultSchema = z.object({
  count: z.number()
});