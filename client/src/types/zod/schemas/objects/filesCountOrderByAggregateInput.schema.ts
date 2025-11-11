import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  original_name: SortOrderSchema.optional(),
  stored_name: SortOrderSchema.optional(),
  mime_type: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  uploaded_by: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const filesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.filesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCountOrderByAggregateInput>;
export const filesCountOrderByAggregateInputObjectZodSchema = makeSchema();
