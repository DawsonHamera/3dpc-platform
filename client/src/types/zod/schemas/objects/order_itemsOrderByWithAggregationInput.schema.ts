import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { order_itemsCountOrderByAggregateInputObjectSchema as order_itemsCountOrderByAggregateInputObjectSchema } from './order_itemsCountOrderByAggregateInput.schema';
import { order_itemsAvgOrderByAggregateInputObjectSchema as order_itemsAvgOrderByAggregateInputObjectSchema } from './order_itemsAvgOrderByAggregateInput.schema';
import { order_itemsMaxOrderByAggregateInputObjectSchema as order_itemsMaxOrderByAggregateInputObjectSchema } from './order_itemsMaxOrderByAggregateInput.schema';
import { order_itemsMinOrderByAggregateInputObjectSchema as order_itemsMinOrderByAggregateInputObjectSchema } from './order_itemsMinOrderByAggregateInput.schema';
import { order_itemsSumOrderByAggregateInputObjectSchema as order_itemsSumOrderByAggregateInputObjectSchema } from './order_itemsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unit_price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  total_price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => order_itemsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => order_itemsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => order_itemsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => order_itemsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => order_itemsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const order_itemsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.order_itemsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsOrderByWithAggregationInput>;
export const order_itemsOrderByWithAggregationInputObjectZodSchema = makeSchema();
