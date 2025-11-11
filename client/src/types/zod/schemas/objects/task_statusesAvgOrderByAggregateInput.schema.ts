import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const task_statusesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.task_statusesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesAvgOrderByAggregateInput>;
export const task_statusesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
