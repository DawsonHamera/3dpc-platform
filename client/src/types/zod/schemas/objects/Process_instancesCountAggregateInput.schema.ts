import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  process_template_id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  priority: z.literal(true).optional(),
  assigned_user_id: z.literal(true).optional(),
  current_step_order: z.literal(true).optional(),
  estimated_duration: z.literal(true).optional(),
  actual_duration: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  completed_at: z.literal(true).optional(),
  due_date: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Process_instancesCountAggregateInputObjectSchema: z.ZodType<Prisma.Process_instancesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_instancesCountAggregateInputType>;
export const Process_instancesCountAggregateInputObjectZodSchema = makeSchema();
