import * as z from 'zod';
export const fileDeleteManyResultSchema = z.object({
  count: z.number()
});