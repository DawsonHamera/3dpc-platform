import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  customer_id: SortOrderSchema.optional(),
  total_price: SortOrderSchema.optional()
}).strict();
export const ordersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ordersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersSumOrderByAggregateInput>;
export const ordersSumOrderByAggregateInputObjectZodSchema = makeSchema();
