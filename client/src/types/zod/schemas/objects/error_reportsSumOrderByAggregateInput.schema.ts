import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  task_id: SortOrderSchema.optional(),
  submitted_by: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional()
}).strict();
export const error_reportsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.error_reportsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsSumOrderByAggregateInput>;
export const error_reportsSumOrderByAggregateInputObjectZodSchema = makeSchema();
