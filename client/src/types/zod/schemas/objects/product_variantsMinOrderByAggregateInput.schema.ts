import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  material_id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  background_color: SortOrderSchema.optional(),
  model_color: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional()
}).strict();
export const product_variantsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.product_variantsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsMinOrderByAggregateInput>;
export const product_variantsMinOrderByAggregateInputObjectZodSchema = makeSchema();
