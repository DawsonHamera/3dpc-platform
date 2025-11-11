import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { migrationsCountOrderByAggregateInputObjectSchema as migrationsCountOrderByAggregateInputObjectSchema } from './migrationsCountOrderByAggregateInput.schema';
import { migrationsAvgOrderByAggregateInputObjectSchema as migrationsAvgOrderByAggregateInputObjectSchema } from './migrationsAvgOrderByAggregateInput.schema';
import { migrationsMaxOrderByAggregateInputObjectSchema as migrationsMaxOrderByAggregateInputObjectSchema } from './migrationsMaxOrderByAggregateInput.schema';
import { migrationsMinOrderByAggregateInputObjectSchema as migrationsMinOrderByAggregateInputObjectSchema } from './migrationsMinOrderByAggregateInput.schema';
import { migrationsSumOrderByAggregateInputObjectSchema as migrationsSumOrderByAggregateInputObjectSchema } from './migrationsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  class: SortOrderSchema.optional(),
  group: SortOrderSchema.optional(),
  namespace: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  batch: SortOrderSchema.optional(),
  _count: z.lazy(() => migrationsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => migrationsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => migrationsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => migrationsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => migrationsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const migrationsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.migrationsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsOrderByWithAggregationInput>;
export const migrationsOrderByWithAggregationInputObjectZodSchema = makeSchema();
