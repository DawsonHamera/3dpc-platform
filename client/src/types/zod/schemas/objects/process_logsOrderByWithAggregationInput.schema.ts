import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_logsCountOrderByAggregateInputObjectSchema as process_logsCountOrderByAggregateInputObjectSchema } from './process_logsCountOrderByAggregateInput.schema';
import { process_logsAvgOrderByAggregateInputObjectSchema as process_logsAvgOrderByAggregateInputObjectSchema } from './process_logsAvgOrderByAggregateInput.schema';
import { process_logsMaxOrderByAggregateInputObjectSchema as process_logsMaxOrderByAggregateInputObjectSchema } from './process_logsMaxOrderByAggregateInput.schema';
import { process_logsMinOrderByAggregateInputObjectSchema as process_logsMinOrderByAggregateInputObjectSchema } from './process_logsMinOrderByAggregateInput.schema';
import { process_logsSumOrderByAggregateInputObjectSchema as process_logsSumOrderByAggregateInputObjectSchema } from './process_logsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_order: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  level: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => process_logsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => process_logsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => process_logsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => process_logsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => process_logsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const process_logsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.process_logsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsOrderByWithAggregationInput>;
export const process_logsOrderByWithAggregationInputObjectZodSchema = makeSchema();
