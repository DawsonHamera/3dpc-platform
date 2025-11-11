import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  process_instance_id: z.literal(true).optional(),
  step_order: z.literal(true).optional(),
  level: z.literal(true).optional(),
  action: z.literal(true).optional(),
  message: z.literal(true).optional(),
  data: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const Process_logsMinAggregateInputObjectSchema: z.ZodType<Prisma.Process_logsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_logsMinAggregateInputType>;
export const Process_logsMinAggregateInputObjectZodSchema = makeSchema();
