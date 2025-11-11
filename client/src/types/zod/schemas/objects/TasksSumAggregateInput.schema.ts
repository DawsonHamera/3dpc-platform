import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  request_id: z.literal(true).optional(),
  model_id: z.literal(true).optional(),
  printer_id: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  assigned_user_id: z.literal(true).optional(),
  process_instance_id: z.literal(true).optional()
}).strict();
export const TasksSumAggregateInputObjectSchema: z.ZodType<Prisma.TasksSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TasksSumAggregateInputType>;
export const TasksSumAggregateInputObjectZodSchema = makeSchema();
