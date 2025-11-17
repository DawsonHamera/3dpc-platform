import * as z from 'zod';
export const attendanceDeleteManyResultSchema = z.object({
  count: z.number()
});