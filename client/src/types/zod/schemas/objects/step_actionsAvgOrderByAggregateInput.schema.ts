import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  action_order: SortOrderSchema.optional()
}).strict();
export const step_actionsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_actionsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsAvgOrderByAggregateInput>;
export const step_actionsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
