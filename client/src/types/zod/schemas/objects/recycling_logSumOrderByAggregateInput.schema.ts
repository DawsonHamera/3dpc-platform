import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional()
}).strict();
export const recycling_logSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.recycling_logSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logSumOrderByAggregateInput>;
export const recycling_logSumOrderByAggregateInputObjectZodSchema = makeSchema();
