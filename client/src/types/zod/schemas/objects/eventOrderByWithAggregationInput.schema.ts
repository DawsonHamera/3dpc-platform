import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { eventCountOrderByAggregateInputObjectSchema as eventCountOrderByAggregateInputObjectSchema } from './eventCountOrderByAggregateInput.schema';
import { eventAvgOrderByAggregateInputObjectSchema as eventAvgOrderByAggregateInputObjectSchema } from './eventAvgOrderByAggregateInput.schema';
import { eventMaxOrderByAggregateInputObjectSchema as eventMaxOrderByAggregateInputObjectSchema } from './eventMaxOrderByAggregateInput.schema';
import { eventMinOrderByAggregateInputObjectSchema as eventMinOrderByAggregateInputObjectSchema } from './eventMinOrderByAggregateInput.schema';
import { eventSumOrderByAggregateInputObjectSchema as eventSumOrderByAggregateInputObjectSchema } from './eventSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  start_time: SortOrderSchema.optional(),
  end_time: SortOrderSchema.optional(),
  image_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_featured: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  event_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_by: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verification_code: SortOrderSchema.optional(),
  _count: z.lazy(() => eventCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => eventAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => eventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => eventMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => eventSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const eventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.eventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.eventOrderByWithAggregationInput>;
export const eventOrderByWithAggregationInputObjectZodSchema = makeSchema();
