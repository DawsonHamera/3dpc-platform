import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional()
}).strict();
export const recycling_logAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.recycling_logAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logAvgOrderByAggregateInput>;
export const recycling_logAvgOrderByAggregateInputObjectZodSchema = makeSchema();
