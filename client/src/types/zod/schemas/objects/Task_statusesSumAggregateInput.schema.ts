import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Task_statusesSumAggregateInputObjectSchema: z.ZodType<Prisma.Task_statusesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Task_statusesSumAggregateInputType>;
export const Task_statusesSumAggregateInputObjectZodSchema = makeSchema();
