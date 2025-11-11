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
export const attendancesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.attendancesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCountOrderByAggregateInput>;
export const attendancesCountOrderByAggregateInputObjectZodSchema = makeSchema();
