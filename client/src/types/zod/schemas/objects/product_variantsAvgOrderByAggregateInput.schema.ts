import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  material_id: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional()
}).strict();
export const product_variantsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.product_variantsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsAvgOrderByAggregateInput>;
export const product_variantsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
