import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unit_price: SortOrderSchema.optional(),
  total_price: SortOrderSchema.optional()
}).strict();
export const order_itemsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.order_itemsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsAvgOrderByAggregateInput>;
export const order_itemsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
