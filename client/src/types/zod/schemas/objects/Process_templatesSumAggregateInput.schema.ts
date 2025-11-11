import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  estimated_duration: z.literal(true).optional()
}).strict();
export const Process_templatesSumAggregateInputObjectSchema: z.ZodType<Prisma.Process_templatesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_templatesSumAggregateInputType>;
export const Process_templatesSumAggregateInputObjectZodSchema = makeSchema();
