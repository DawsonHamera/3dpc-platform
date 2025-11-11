import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { filesCountOrderByAggregateInputObjectSchema as filesCountOrderByAggregateInputObjectSchema } from './filesCountOrderByAggregateInput.schema';
import { filesAvgOrderByAggregateInputObjectSchema as filesAvgOrderByAggregateInputObjectSchema } from './filesAvgOrderByAggregateInput.schema';
import { filesMaxOrderByAggregateInputObjectSchema as filesMaxOrderByAggregateInputObjectSchema } from './filesMaxOrderByAggregateInput.schema';
import { filesMinOrderByAggregateInputObjectSchema as filesMinOrderByAggregateInputObjectSchema } from './filesMinOrderByAggregateInput.schema';
import { filesSumOrderByAggregateInputObjectSchema as filesSumOrderByAggregateInputObjectSchema } from './filesSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => filesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => filesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => filesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => filesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => filesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const filesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.filesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.filesOrderByWithAggregationInput>;
export const filesOrderByWithAggregationInputObjectZodSchema = makeSchema();
