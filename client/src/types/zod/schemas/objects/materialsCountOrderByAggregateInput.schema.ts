import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  hex: SortOrderSchema.optional(),
  texture_file_id: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  vendor: SortOrderSchema.optional(),
  min_temp: SortOrderSchema.optional(),
  max_temp: SortOrderSchema.optional(),
  details: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional(),
  texture_url: SortOrderSchema.optional(),
  cost: SortOrderSchema.optional(),
  cost_unit: SortOrderSchema.optional(),
  supplier: SortOrderSchema.optional(),
  safety_data: SortOrderSchema.optional(),
  density: SortOrderSchema.optional()
}).strict();
export const materialsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.materialsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsCountOrderByAggregateInput>;
export const materialsCountOrderByAggregateInputObjectZodSchema = makeSchema();
