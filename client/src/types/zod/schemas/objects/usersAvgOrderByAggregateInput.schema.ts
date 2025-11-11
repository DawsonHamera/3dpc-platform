import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role_id: SortOrderSchema.optional(),
  grade_id: SortOrderSchema.optional(),
  score: SortOrderSchema.optional()
}).strict();
export const usersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.usersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.usersAvgOrderByAggregateInput>;
export const usersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
