import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  grade: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const gradesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.gradesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesMaxOrderByAggregateInput>;
export const gradesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
