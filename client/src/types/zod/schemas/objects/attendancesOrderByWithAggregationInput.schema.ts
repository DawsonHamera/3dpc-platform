import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { attendancesCountOrderByAggregateInputObjectSchema as attendancesCountOrderByAggregateInputObjectSchema } from './attendancesCountOrderByAggregateInput.schema';
import { attendancesAvgOrderByAggregateInputObjectSchema as attendancesAvgOrderByAggregateInputObjectSchema } from './attendancesAvgOrderByAggregateInput.schema';
import { attendancesMaxOrderByAggregateInputObjectSchema as attendancesMaxOrderByAggregateInputObjectSchema } from './attendancesMaxOrderByAggregateInput.schema';
import { attendancesMinOrderByAggregateInputObjectSchema as attendancesMinOrderByAggregateInputObjectSchema } from './attendancesMinOrderByAggregateInput.schema';
import { attendancesSumOrderByAggregateInputObjectSchema as attendancesSumOrderByAggregateInputObjectSchema } from './attendancesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  event_id: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  arrival_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => attendancesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => attendancesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => attendancesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => attendancesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => attendancesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const attendancesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.attendancesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesOrderByWithAggregationInput>;
export const attendancesOrderByWithAggregationInputObjectZodSchema = makeSchema();
