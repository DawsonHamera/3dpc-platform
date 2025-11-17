import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  event_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  arrival_time: SortOrderSchema.optional()
}).strict();
export const attendanceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.attendanceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceMaxOrderByAggregateInput>;
export const attendanceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
