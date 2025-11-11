import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GradesSumAggregateInputObjectSchema: z.ZodType<Prisma.GradesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GradesSumAggregateInputType>;
export const GradesSumAggregateInputObjectZodSchema = makeSchema();
