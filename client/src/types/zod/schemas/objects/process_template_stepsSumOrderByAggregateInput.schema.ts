import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional()
}).strict();
export const process_template_stepsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_template_stepsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsSumOrderByAggregateInput>;
export const process_template_stepsSumOrderByAggregateInputObjectZodSchema = makeSchema();
