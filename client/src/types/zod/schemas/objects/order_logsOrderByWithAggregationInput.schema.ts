import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { order_logsCountOrderByAggregateInputObjectSchema as order_logsCountOrderByAggregateInputObjectSchema } from './order_logsCountOrderByAggregateInput.schema';
import { order_logsAvgOrderByAggregateInputObjectSchema as order_logsAvgOrderByAggregateInputObjectSchema } from './order_logsAvgOrderByAggregateInput.schema';
import { order_logsMaxOrderByAggregateInputObjectSchema as order_logsMaxOrderByAggregateInputObjectSchema } from './order_logsMaxOrderByAggregateInput.schema';
import { order_logsMinOrderByAggregateInputObjectSchema as order_logsMinOrderByAggregateInputObjectSchema } from './order_logsMinOrderByAggregateInput.schema';
import { order_logsSumOrderByAggregateInputObjectSchema as order_logsSumOrderByAggregateInputObjectSchema } from './order_logsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  log_timestamp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  log_message: SortOrderSchema.optional(),
  log_details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => order_logsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => order_logsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => order_logsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => order_logsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => order_logsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const order_logsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.order_logsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsOrderByWithAggregationInput>;
export const order_logsOrderByWithAggregationInputObjectZodSchema = makeSchema();
