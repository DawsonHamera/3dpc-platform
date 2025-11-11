import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password_hash: SortOrderSchema.optional(),
  role_id: SortOrderSchema.optional(),
  grade_id: SortOrderSchema.optional(),
  score: SortOrderSchema.optional(),
  last_active: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional()
}).strict();
export const usersMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.usersMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.usersMinOrderByAggregateInput>;
export const usersMinOrderByAggregateInputObjectZodSchema = makeSchema();
