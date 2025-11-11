import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional()
}).strict();
export const order_logsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.order_logsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsSumOrderByAggregateInput>;
export const order_logsSumOrderByAggregateInputObjectZodSchema = makeSchema();
