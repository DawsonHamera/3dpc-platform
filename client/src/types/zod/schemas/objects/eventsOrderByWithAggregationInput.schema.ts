import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { eventsCountOrderByAggregateInputObjectSchema as eventsCountOrderByAggregateInputObjectSchema } from './eventsCountOrderByAggregateInput.schema';
import { eventsAvgOrderByAggregateInputObjectSchema as eventsAvgOrderByAggregateInputObjectSchema } from './eventsAvgOrderByAggregateInput.schema';
import { eventsMaxOrderByAggregateInputObjectSchema as eventsMaxOrderByAggregateInputObjectSchema } from './eventsMaxOrderByAggregateInput.schema';
import { eventsMinOrderByAggregateInputObjectSchema as eventsMinOrderByAggregateInputObjectSchema } from './eventsMinOrderByAggregateInput.schema';
import { eventsSumOrderByAggregateInputObjectSchema as eventsSumOrderByAggregateInputObjectSchema } from './eventsSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => eventsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => eventsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => eventsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => eventsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => eventsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const eventsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.eventsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsOrderByWithAggregationInput>;
export const eventsOrderByWithAggregationInputObjectZodSchema = makeSchema();
