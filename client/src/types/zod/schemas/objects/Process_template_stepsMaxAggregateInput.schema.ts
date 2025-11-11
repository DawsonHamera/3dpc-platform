import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  process_template_id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  step_order: z.literal(true).optional(),
  is_required: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const Process_template_stepsMaxAggregateInputObjectSchema: z.ZodType<Prisma.Process_template_stepsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_template_stepsMaxAggregateInputType>;
export const Process_template_stepsMaxAggregateInputObjectZodSchema = makeSchema();
