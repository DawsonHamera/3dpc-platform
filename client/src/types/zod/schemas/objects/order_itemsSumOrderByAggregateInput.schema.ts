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
export const order_itemsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.order_itemsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsSumOrderByAggregateInput>;
export const order_itemsSumOrderByAggregateInputObjectZodSchema = makeSchema();
