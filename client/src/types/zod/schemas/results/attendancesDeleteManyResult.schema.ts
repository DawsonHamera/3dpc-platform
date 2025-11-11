import * as z from 'zod';
export const attendancesDeleteManyResultSchema = z.object({
  count: z.number()
});