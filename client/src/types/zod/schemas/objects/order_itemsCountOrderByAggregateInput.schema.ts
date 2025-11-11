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
export const order_itemsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.order_itemsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsCountOrderByAggregateInput>;
export const order_itemsCountOrderByAggregateInputObjectZodSchema = makeSchema();
