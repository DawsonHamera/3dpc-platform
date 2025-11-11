import * as z from 'zod';
export const migrationsUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  version: z.string(),
  class: z.string(),
  group: z.string(),
  namespace: z.string(),
  time: z.number().int(),
  batch: z.number().int()
}));