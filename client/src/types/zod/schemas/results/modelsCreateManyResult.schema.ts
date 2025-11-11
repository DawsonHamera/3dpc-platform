import * as z from 'zod';
export const modelsCreateManyResultSchema = z.object({
  count: z.number()
});