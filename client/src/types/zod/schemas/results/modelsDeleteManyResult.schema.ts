import * as z from 'zod';
export const modelsDeleteManyResultSchema = z.object({
  count: z.number()
});