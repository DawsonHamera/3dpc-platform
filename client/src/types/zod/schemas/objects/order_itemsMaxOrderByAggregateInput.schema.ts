import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unit_price: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  total_price: SortOrderSchema.optional()
}).strict();
export const order_itemsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.order_itemsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsMaxOrderByAggregateInput>;
export const order_itemsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
