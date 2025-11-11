import * as z from 'zod';
export const gradesCreateManyResultSchema = z.object({
  count: z.number()
});