import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { usersCountOrderByAggregateInputObjectSchema as usersCountOrderByAggregateInputObjectSchema } from './usersCountOrderByAggregateInput.schema';
import { usersAvgOrderByAggregateInputObjectSchema as usersAvgOrderByAggregateInputObjectSchema } from './usersAvgOrderByAggregateInput.schema';
import { usersMaxOrderByAggregateInputObjectSchema as usersMaxOrderByAggregateInputObjectSchema } from './usersMaxOrderByAggregateInput.schema';
import { usersMinOrderByAggregateInputObjectSchema as usersMinOrderByAggregateInputObjectSchema } from './usersMinOrderByAggregateInput.schema';
import { usersSumOrderByAggregateInputObjectSchema as usersSumOrderByAggregateInputObjectSchema } from './usersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password_hash: SortOrderSchema.optional(),
  role_id: SortOrderSchema.optional(),
  grade_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  score: SortOrderSchema.optional(),
  last_active: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => usersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => usersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => usersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => usersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => usersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const usersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.usersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.usersOrderByWithAggregationInput>;
export const usersOrderByWithAggregationInputObjectZodSchema = makeSchema();
