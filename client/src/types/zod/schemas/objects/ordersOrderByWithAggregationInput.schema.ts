import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ordersCountOrderByAggregateInputObjectSchema as ordersCountOrderByAggregateInputObjectSchema } from './ordersCountOrderByAggregateInput.schema';
import { ordersAvgOrderByAggregateInputObjectSchema as ordersAvgOrderByAggregateInputObjectSchema } from './ordersAvgOrderByAggregateInput.schema';
import { ordersMaxOrderByAggregateInputObjectSchema as ordersMaxOrderByAggregateInputObjectSchema } from './ordersMaxOrderByAggregateInput.schema';
import { ordersMinOrderByAggregateInputObjectSchema as ordersMinOrderByAggregateInputObjectSchema } from './ordersMinOrderByAggregateInput.schema';
import { ordersSumOrderByAggregateInputObjectSchema as ordersSumOrderByAggregateInputObjectSchema } from './ordersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  order_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  requested_by_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  order_status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  payment_status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  shipping_method: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  shipping_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  total_price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ordersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ordersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ordersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ordersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ordersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ordersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ordersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersOrderByWithAggregationInput>;
export const ordersOrderByWithAggregationInputObjectZodSchema = makeSchema();
