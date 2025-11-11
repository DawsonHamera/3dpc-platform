import * as z from 'zod';
export const attendancesCreateManyResultSchema = z.object({
  count: z.number()
});