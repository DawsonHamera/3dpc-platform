import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  process_instance_id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  step_order: z.literal(true).optional(),
  status: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  completed_at: z.literal(true).optional(),
  assigned_user_id: z.literal(true).optional(),
  is_required: z.literal(true).optional(),
  input_data: z.literal(true).optional(),
  output_data: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  due_date: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Process_instance_stepsCountAggregateInputObjectSchema: z.ZodType<Prisma.Process_instance_stepsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_instance_stepsCountAggregateInputType>;
export const Process_instance_stepsCountAggregateInputObjectZodSchema = makeSchema();
