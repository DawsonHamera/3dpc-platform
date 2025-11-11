import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  process_instance_id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  step_order: z.literal(true).optional(),
  assigned_user_id: z.literal(true).optional()
}).strict();
export const Process_instance_stepsAvgAggregateInputObjectSchema: z.ZodType<Prisma.Process_instance_stepsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_instance_stepsAvgAggregateInputType>;
export const Process_instance_stepsAvgAggregateInputObjectZodSchema = makeSchema();
