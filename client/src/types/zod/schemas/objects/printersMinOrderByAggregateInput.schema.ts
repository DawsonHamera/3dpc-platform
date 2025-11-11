import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  owner: SortOrderSchema.optional(),
  details: SortOrderSchema.optional(),
  image_id: SortOrderSchema.optional(),
  material_id: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional()
}).strict();
export const printersMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.printersMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.printersMinOrderByAggregateInput>;
export const printersMinOrderByAggregateInputObjectZodSchema = makeSchema();
