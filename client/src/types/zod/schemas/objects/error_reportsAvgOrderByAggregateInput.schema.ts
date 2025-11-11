import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  task_id: SortOrderSchema.optional(),
  submitted_by: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional()
}).strict();
export const error_reportsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.error_reportsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsAvgOrderByAggregateInput>;
export const error_reportsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
