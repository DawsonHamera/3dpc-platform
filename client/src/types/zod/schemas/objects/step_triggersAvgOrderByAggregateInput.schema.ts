import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_action_id: SortOrderSchema.optional(),
  trigger_order: SortOrderSchema.optional()
}).strict();
export const step_triggersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_triggersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersAvgOrderByAggregateInput>;
export const step_triggersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
