import * as z from 'zod';
export const roleCreateManyResultSchema = z.object({
  count: z.number()
});