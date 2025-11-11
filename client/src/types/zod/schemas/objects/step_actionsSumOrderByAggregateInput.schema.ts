import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  action_order: SortOrderSchema.optional()
}).strict();
export const step_actionsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_actionsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsSumOrderByAggregateInput>;
export const step_actionsSumOrderByAggregateInputObjectZodSchema = makeSchema();
