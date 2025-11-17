import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { roleCountOrderByAggregateInputObjectSchema as roleCountOrderByAggregateInputObjectSchema } from './roleCountOrderByAggregateInput.schema';
import { roleAvgOrderByAggregateInputObjectSchema as roleAvgOrderByAggregateInputObjectSchema } from './roleAvgOrderByAggregateInput.schema';
import { roleMaxOrderByAggregateInputObjectSchema as roleMaxOrderByAggregateInputObjectSchema } from './roleMaxOrderByAggregateInput.schema';
import { roleMinOrderByAggregateInputObjectSchema as roleMinOrderByAggregateInputObjectSchema } from './roleMinOrderByAggregateInput.schema';
import { roleSumOrderByAggregateInputObjectSchema as roleSumOrderByAggregateInputObjectSchema } from './roleSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => roleCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => roleAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => roleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => roleMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => roleSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const roleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.roleOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.roleOrderByWithAggregationInput>;
export const roleOrderByWithAggregationInputObjectZodSchema = makeSchema();
