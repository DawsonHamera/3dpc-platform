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
export const recycling_logCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.recycling_logCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logCountOrderByAggregateInput>;
export const recycling_logCountOrderByAggregateInputObjectZodSchema = makeSchema();
