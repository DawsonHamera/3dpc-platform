import * as z from 'zod';
export const request_statusesCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  requests: z.array(z.unknown())
});