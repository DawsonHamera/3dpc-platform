import * as z from 'zod';
export const usersDeleteManyResultSchema = z.object({
  count: z.number()
});