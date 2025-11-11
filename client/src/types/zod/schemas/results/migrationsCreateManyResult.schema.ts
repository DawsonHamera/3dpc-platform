import * as z from 'zod';
export const migrationsCreateManyResultSchema = z.object({
  count: z.number()
});