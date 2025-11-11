import * as z from 'zod';
export const usersCreateManyResultSchema = z.object({
  count: z.number()
});