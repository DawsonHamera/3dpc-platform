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
export const roleMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.roleMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.roleMaxOrderByAggregateInput>;
export const roleMaxOrderByAggregateInputObjectZodSchema = makeSchema();
