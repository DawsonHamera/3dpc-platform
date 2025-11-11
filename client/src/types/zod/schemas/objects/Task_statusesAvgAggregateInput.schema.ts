import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Task_statusesAvgAggregateInputObjectSchema: z.ZodType<Prisma.Task_statusesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Task_statusesAvgAggregateInputType>;
export const Task_statusesAvgAggregateInputObjectZodSchema = makeSchema();
