import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  order_index: SortOrderSchema.optional()
}).strict();
export const shop_sectionsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.shop_sectionsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsMinOrderByAggregateInput>;
export const shop_sectionsMinOrderByAggregateInputObjectZodSchema = makeSchema();
