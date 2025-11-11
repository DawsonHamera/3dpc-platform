import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const StepsAvgAggregateInputObjectSchema: z.ZodType<Prisma.StepsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StepsAvgAggregateInputType>;
export const StepsAvgAggregateInputObjectZodSchema = makeSchema();
