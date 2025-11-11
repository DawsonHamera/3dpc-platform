import * as z from 'zod';
export const stepsDeleteManyResultSchema = z.object({
  count: z.number()
});