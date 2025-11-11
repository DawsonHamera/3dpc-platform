import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  order_index: SortOrderSchema.optional()
}).strict();
export const shop_sectionsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.shop_sectionsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsCountOrderByAggregateInput>;
export const shop_sectionsCountOrderByAggregateInputObjectZodSchema = makeSchema();
