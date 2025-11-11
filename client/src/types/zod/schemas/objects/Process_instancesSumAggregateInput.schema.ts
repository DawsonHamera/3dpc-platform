import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  process_template_id: z.literal(true).optional(),
  assigned_user_id: z.literal(true).optional(),
  current_step_order: z.literal(true).optional(),
  estimated_duration: z.literal(true).optional(),
  actual_duration: z.literal(true).optional()
}).strict();
export const Process_instancesSumAggregateInputObjectSchema: z.ZodType<Prisma.Process_instancesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_instancesSumAggregateInputType>;
export const Process_instancesSumAggregateInputObjectZodSchema = makeSchema();
