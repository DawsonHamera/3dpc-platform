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
export const migrationsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.migrationsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsMaxOrderByAggregateInput>;
export const migrationsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
