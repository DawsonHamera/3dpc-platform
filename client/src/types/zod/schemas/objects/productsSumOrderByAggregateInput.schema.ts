import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  model_id: SortOrderSchema.optional(),
  default_variant_id: SortOrderSchema.optional(),
  section_id: SortOrderSchema.optional()
}).strict();
export const productsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.productsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.productsSumOrderByAggregateInput>;
export const productsSumOrderByAggregateInputObjectZodSchema = makeSchema();
