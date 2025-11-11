import * as z from 'zod';
export const migrationsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  version: z.string(),
  class: z.string(),
  group: z.string(),
  namespace: z.string(),
  time: z.number().int(),
  batch: z.number().int()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});