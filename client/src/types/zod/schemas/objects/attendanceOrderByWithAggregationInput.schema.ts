import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { attendanceCountOrderByAggregateInputObjectSchema as attendanceCountOrderByAggregateInputObjectSchema } from './attendanceCountOrderByAggregateInput.schema';
import { attendanceAvgOrderByAggregateInputObjectSchema as attendanceAvgOrderByAggregateInputObjectSchema } from './attendanceAvgOrderByAggregateInput.schema';
import { attendanceMaxOrderByAggregateInputObjectSchema as attendanceMaxOrderByAggregateInputObjectSchema } from './attendanceMaxOrderByAggregateInput.schema';
import { attendanceMinOrderByAggregateInputObjectSchema as attendanceMinOrderByAggregateInputObjectSchema } from './attendanceMinOrderByAggregateInput.schema';
import { attendanceSumOrderByAggregateInputObjectSchema as attendanceSumOrderByAggregateInputObjectSchema } from './attendanceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  event_id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rsvp_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  arrival_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => attendanceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => attendanceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => attendanceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => attendanceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => attendanceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const attendanceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.attendanceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceOrderByWithAggregationInput>;
export const attendanceOrderByWithAggregationInputObjectZodSchema = makeSchema();
