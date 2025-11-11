import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_index: SortOrderSchema.optional()
}).strict();
export const shop_sectionsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.shop_sectionsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsSumOrderByAggregateInput>;
export const shop_sectionsSumOrderByAggregateInputObjectZodSchema = makeSchema();
