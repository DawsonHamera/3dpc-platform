import * as z from 'zod';
export const migrationsDeleteManyResultSchema = z.object({
  count: z.number()
});