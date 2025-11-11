import * as z from 'zod';
export const tasksCreateManyResultSchema = z.object({
  count: z.number()
});