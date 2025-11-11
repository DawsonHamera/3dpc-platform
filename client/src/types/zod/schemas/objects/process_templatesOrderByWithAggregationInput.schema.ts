import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_templatesCountOrderByAggregateInputObjectSchema as process_templatesCountOrderByAggregateInputObjectSchema } from './process_templatesCountOrderByAggregateInput.schema';
import { process_templatesAvgOrderByAggregateInputObjectSchema as process_templatesAvgOrderByAggregateInputObjectSchema } from './process_templatesAvgOrderByAggregateInput.schema';
import { process_templatesMaxOrderByAggregateInputObjectSchema as process_templatesMaxOrderByAggregateInputObjectSchema } from './process_templatesMaxOrderByAggregateInput.schema';
import { process_templatesMinOrderByAggregateInputObjectSchema as process_templatesMinOrderByAggregateInputObjectSchema } from './process_templatesMinOrderByAggregateInput.schema';
import { process_templatesSumOrderByAggregateInputObjectSchema as process_templatesSumOrderByAggregateInputObjectSchema } from './process_templatesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  estimated_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => process_templatesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => process_templatesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => process_templatesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => process_templatesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => process_templatesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const process_templatesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.process_templatesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesOrderByWithAggregationInput>;
export const process_templatesOrderByWithAggregationInputObjectZodSchema = makeSchema();
