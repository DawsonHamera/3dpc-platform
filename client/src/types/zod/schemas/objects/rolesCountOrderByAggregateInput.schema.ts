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
export const rolesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.rolesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesCountOrderByAggregateInput>;
export const rolesCountOrderByAggregateInputObjectZodSchema = makeSchema();
