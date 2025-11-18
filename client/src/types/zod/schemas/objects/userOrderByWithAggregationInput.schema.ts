import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { userCountOrderByAggregateInputObjectSchema as userCountOrderByAggregateInputObjectSchema } from './userCountOrderByAggregateInput.schema';
import { userAvgOrderByAggregateInputObjectSchema as userAvgOrderByAggregateInputObjectSchema } from './userAvgOrderByAggregateInput.schema';
import { userMaxOrderByAggregateInputObjectSchema as userMaxOrderByAggregateInputObjectSchema } from './userMaxOrderByAggregateInput.schema';
import { userMinOrderByAggregateInputObjectSchema as userMinOrderByAggregateInputObjectSchema } from './userMinOrderByAggregateInput.schema';
import { userSumOrderByAggregateInputObjectSchema as userSumOrderByAggregateInputObjectSchema } from './userSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password_hash: SortOrderSchema.optional(),
  role_id: SortOrderSchema.optional(),
  grade: SortOrderSchema.optional(),
  points: SortOrderSchema.optional(),
  last_active: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => userCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => userAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => userMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => userMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => userSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const userOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.userOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.userOrderByWithAggregationInput>;
export const userOrderByWithAggregationInputObjectZodSchema = makeSchema();
