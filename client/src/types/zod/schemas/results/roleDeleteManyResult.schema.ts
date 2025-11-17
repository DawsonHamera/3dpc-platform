import * as z from 'zod';
export const roleDeleteManyResultSchema = z.object({
  count: z.number()
});