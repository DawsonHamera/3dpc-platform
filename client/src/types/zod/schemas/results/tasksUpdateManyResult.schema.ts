import * as z from 'zod';
export const tasksUpdateManyResultSchema = z.object({
  count: z.number()
});