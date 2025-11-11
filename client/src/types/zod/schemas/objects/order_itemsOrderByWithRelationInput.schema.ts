import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ordersOrderByWithRelationInputObjectSchema as ordersOrderByWithRelationInputObjectSchema } from './ordersOrderByWithRelationInput.schema';
import { order_itemsOrderByRelevanceInputObjectSchema as order_itemsOrderByRelevanceInputObjectSchema } from './order_itemsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unit_price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  total_price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orders: z.lazy(() => ordersOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => order_itemsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const order_itemsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.order_itemsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsOrderByWithRelationInput>;
export const order_itemsOrderByWithRelationInputObjectZodSchema = makeSchema();
