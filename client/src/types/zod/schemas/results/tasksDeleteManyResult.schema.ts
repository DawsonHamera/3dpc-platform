import * as z from 'zod';
export const tasksDeleteManyResultSchema = z.object({
  count: z.number()
});