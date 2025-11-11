import * as z from 'zod';
export const filesDeleteManyResultSchema = z.object({
  count: z.number()
});