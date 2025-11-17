import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  record_id: SortOrderSchema.optional()
}).strict();
export const activity_logSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.activity_logSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logSumOrderByAggregateInput>;
export const activity_logSumOrderByAggregateInputObjectZodSchema = makeSchema();
