import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const roleMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.roleMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.roleMinOrderByAggregateInput>;
export const roleMinOrderByAggregateInputObjectZodSchema = makeSchema();
