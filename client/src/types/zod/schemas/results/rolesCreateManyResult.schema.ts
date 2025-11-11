import * as z from 'zod';
export const rolesCreateManyResultSchema = z.object({
  count: z.number()
});