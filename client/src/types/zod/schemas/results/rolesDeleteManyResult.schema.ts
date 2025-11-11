import * as z from 'zod';
export const rolesDeleteManyResultSchema = z.object({
  count: z.number()
});