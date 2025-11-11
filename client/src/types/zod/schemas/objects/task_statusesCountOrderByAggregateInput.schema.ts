import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const task_statusesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.task_statusesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesCountOrderByAggregateInput>;
export const task_statusesCountOrderByAggregateInputObjectZodSchema = makeSchema();
