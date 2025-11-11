import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { rolesCountOrderByAggregateInputObjectSchema as rolesCountOrderByAggregateInputObjectSchema } from './rolesCountOrderByAggregateInput.schema';
import { rolesAvgOrderByAggregateInputObjectSchema as rolesAvgOrderByAggregateInputObjectSchema } from './rolesAvgOrderByAggregateInput.schema';
import { rolesMaxOrderByAggregateInputObjectSchema as rolesMaxOrderByAggregateInputObjectSchema } from './rolesMaxOrderByAggregateInput.schema';
import { rolesMinOrderByAggregateInputObjectSchema as rolesMinOrderByAggregateInputObjectSchema } from './rolesMinOrderByAggregateInput.schema';
import { rolesSumOrderByAggregateInputObjectSchema as rolesSumOrderByAggregateInputObjectSchema } from './rolesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => rolesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => rolesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => rolesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => rolesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => rolesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const rolesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.rolesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesOrderByWithAggregationInput>;
export const rolesOrderByWithAggregationInputObjectZodSchema = makeSchema();
