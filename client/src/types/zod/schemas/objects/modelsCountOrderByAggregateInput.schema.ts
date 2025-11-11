import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  model_file_id: SortOrderSchema.optional(),
  material_slots: SortOrderSchema.optional(),
  estimated_duration: SortOrderSchema.optional(),
  estimated_filament: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional()
}).strict();
export const modelsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.modelsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsCountOrderByAggregateInput>;
export const modelsCountOrderByAggregateInputObjectZodSchema = makeSchema();
