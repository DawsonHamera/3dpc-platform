import * as z from 'zod';
export const requestsDeleteManyResultSchema = z.object({
  count: z.number()
});