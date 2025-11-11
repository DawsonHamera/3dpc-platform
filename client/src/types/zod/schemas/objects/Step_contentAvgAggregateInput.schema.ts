import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  step_id: z.literal(true).optional(),
  content_order: z.literal(true).optional()
}).strict();
export const Step_contentAvgAggregateInputObjectSchema: z.ZodType<Prisma.Step_contentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Step_contentAvgAggregateInputType>;
export const Step_contentAvgAggregateInputObjectZodSchema = makeSchema();
