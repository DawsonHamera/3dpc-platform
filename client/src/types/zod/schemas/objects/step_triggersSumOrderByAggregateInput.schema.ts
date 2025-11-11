import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_action_id: SortOrderSchema.optional(),
  trigger_order: SortOrderSchema.optional()
}).strict();
export const step_triggersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_triggersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersSumOrderByAggregateInput>;
export const step_triggersSumOrderByAggregateInputObjectZodSchema = makeSchema();
