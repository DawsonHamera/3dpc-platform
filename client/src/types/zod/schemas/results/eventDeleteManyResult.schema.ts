import * as z from 'zod';
export const eventDeleteManyResultSchema = z.object({
  count: z.number()
});