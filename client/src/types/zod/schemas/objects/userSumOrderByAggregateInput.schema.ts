import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role_id: SortOrderSchema.optional(),
  score: SortOrderSchema.optional()
}).strict();
export const userSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.userSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.userSumOrderByAggregateInput>;
export const userSumOrderByAggregateInputObjectZodSchema = makeSchema();
