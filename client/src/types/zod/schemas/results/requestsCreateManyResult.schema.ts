import * as z from 'zod';
export const requestsCreateManyResultSchema = z.object({
  count: z.number()
});