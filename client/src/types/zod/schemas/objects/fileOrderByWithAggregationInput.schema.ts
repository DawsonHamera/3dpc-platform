import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { fileCountOrderByAggregateInputObjectSchema as fileCountOrderByAggregateInputObjectSchema } from './fileCountOrderByAggregateInput.schema';
import { fileAvgOrderByAggregateInputObjectSchema as fileAvgOrderByAggregateInputObjectSchema } from './fileAvgOrderByAggregateInput.schema';
import { fileMaxOrderByAggregateInputObjectSchema as fileMaxOrderByAggregateInputObjectSchema } from './fileMaxOrderByAggregateInput.schema';
import { fileMinOrderByAggregateInputObjectSchema as fileMinOrderByAggregateInputObjectSchema } from './fileMinOrderByAggregateInput.schema';
import { fileSumOrderByAggregateInputObjectSchema as fileSumOrderByAggregateInputObjectSchema } from './fileSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  original_name: SortOrderSchema.optional(),
  stored_name: SortOrderSchema.optional(),
  mime_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  uploaded_by: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  _count: z.lazy(() => fileCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => fileAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => fileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => fileMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => fileSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const fileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.fileOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.fileOrderByWithAggregationInput>;
export const fileOrderByWithAggregationInputObjectZodSchema = makeSchema();
