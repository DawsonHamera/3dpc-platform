import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  texture_file_id: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  min_temp: SortOrderSchema.optional(),
  max_temp: SortOrderSchema.optional(),
  cost: SortOrderSchema.optional(),
  density: SortOrderSchema.optional()
}).strict();
export const materialsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.materialsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsAvgOrderByAggregateInput>;
export const materialsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
