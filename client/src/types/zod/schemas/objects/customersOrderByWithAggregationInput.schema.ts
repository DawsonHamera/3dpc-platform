import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { customersCountOrderByAggregateInputObjectSchema as customersCountOrderByAggregateInputObjectSchema } from './customersCountOrderByAggregateInput.schema';
import { customersAvgOrderByAggregateInputObjectSchema as customersAvgOrderByAggregateInputObjectSchema } from './customersAvgOrderByAggregateInput.schema';
import { customersMaxOrderByAggregateInputObjectSchema as customersMaxOrderByAggregateInputObjectSchema } from './customersMaxOrderByAggregateInput.schema';
import { customersMinOrderByAggregateInputObjectSchema as customersMinOrderByAggregateInputObjectSchema } from './customersMinOrderByAggregateInput.schema';
import { customersSumOrderByAggregateInputObjectSchema as customersSumOrderByAggregateInputObjectSchema } from './customersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  first_name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  last_name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ip_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  first_seen: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  last_seen: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  preferred_shipping_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  preferred_shipping_method: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => customersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => customersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => customersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => customersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => customersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const customersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.customersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.customersOrderByWithAggregationInput>;
export const customersOrderByWithAggregationInputObjectZodSchema = makeSchema();
