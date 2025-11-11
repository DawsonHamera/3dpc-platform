import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const StepsSumAggregateInputObjectSchema: z.ZodType<Prisma.StepsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StepsSumAggregateInputType>;
export const StepsSumAggregateInputObjectZodSchema = makeSchema();
