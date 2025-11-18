import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional()
}).strict();
export const recycling_logMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.recycling_logMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logMaxOrderByAggregateInput>;
export const recycling_logMaxOrderByAggregateInputObjectZodSchema = makeSchema();
