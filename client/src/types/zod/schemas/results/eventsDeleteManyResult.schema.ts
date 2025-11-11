import * as z from 'zod';
export const eventsDeleteManyResultSchema = z.object({
  count: z.number()
});