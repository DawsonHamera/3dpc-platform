import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const task_statusesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.task_statusesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesSumOrderByAggregateInput>;
export const task_statusesSumOrderByAggregateInputObjectZodSchema = makeSchema();
