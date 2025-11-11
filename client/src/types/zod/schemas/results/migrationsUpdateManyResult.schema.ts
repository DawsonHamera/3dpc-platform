import * as z from 'zod';
export const migrationsUpdateManyResultSchema = z.object({
  count: z.number()
});