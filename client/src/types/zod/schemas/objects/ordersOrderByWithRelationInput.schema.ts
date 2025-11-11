import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { order_itemsOrderByRelationAggregateInputObjectSchema as order_itemsOrderByRelationAggregateInputObjectSchema } from './order_itemsOrderByRelationAggregateInput.schema';
import { order_logsOrderByRelationAggregateInputObjectSchema as order_logsOrderByRelationAggregateInputObjectSchema } from './order_logsOrderByRelationAggregateInput.schema';
import { ordersOrderByRelevanceInputObjectSchema as ordersOrderByRelevanceInputObjectSchema } from './ordersOrderByRelevanceInput.schema'

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
  order_items: z.lazy(() => order_itemsOrderByRelationAggregateInputObjectSchema).optional(),
  order_logs: z.lazy(() => order_logsOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => ordersOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ordersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ordersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersOrderByWithRelationInput>;
export const ordersOrderByWithRelationInputObjectZodSchema = makeSchema();
