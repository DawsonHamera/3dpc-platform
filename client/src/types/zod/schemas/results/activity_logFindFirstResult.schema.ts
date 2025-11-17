import * as z from 'zod';
export const activity_logFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  action_type: z.string(),
  table_name: z.string(),
  record_id: z.number().int(),
  result: z.string(),
  details: z.unknown().optional(),
  created_at: z.date().optional(),
  user: z.unknown()
}));