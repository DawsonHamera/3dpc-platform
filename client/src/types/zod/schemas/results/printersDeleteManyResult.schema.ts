import * as z from 'zod';
export const printersDeleteManyResultSchema = z.object({
  count: z.number()
});