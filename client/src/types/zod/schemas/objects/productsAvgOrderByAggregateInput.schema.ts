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
export const productsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.productsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.productsAvgOrderByAggregateInput>;
export const productsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
