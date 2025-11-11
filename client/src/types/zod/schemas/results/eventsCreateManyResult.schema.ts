import * as z from 'zod';
export const eventsCreateManyResultSchema = z.object({
  count: z.number()
});