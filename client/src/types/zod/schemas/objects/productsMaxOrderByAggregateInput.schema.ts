import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  model_id: SortOrderSchema.optional(),
  default_variant_id: SortOrderSchema.optional(),
  custom_options: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
  section_id: SortOrderSchema.optional()
}).strict();
export const productsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.productsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.productsMaxOrderByAggregateInput>;
export const productsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
