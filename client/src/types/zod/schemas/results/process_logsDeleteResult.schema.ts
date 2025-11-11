import * as z from 'zod';
export const process_logsDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  process_instance_id: z.number().int(),
  step_order: z.number().int().optional(),
  level: z.unknown(),
  action: z.unknown(),
  message: z.string(),
  data: z.string().optional(),
  user_id: z.number().int().optional(),
  created_at: z.date(),
  deleted_at: z.date().optional(),
  updated_at: z.date(),
  process_instances: z.unknown(),
  users: z.unknown().optional()
}));