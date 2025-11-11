import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  class: SortOrderSchema.optional(),
  group: SortOrderSchema.optional(),
  namespace: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  batch: SortOrderSchema.optional()
}).strict();
export const migrationsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.migrationsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsMinOrderByAggregateInput>;
export const migrationsMinOrderByAggregateInputObjectZodSchema = makeSchema();
