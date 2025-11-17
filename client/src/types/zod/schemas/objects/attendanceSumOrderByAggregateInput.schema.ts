import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  event_id: SortOrderSchema.optional()
}).strict();
export const attendanceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.attendanceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceSumOrderByAggregateInput>;
export const attendanceSumOrderByAggregateInputObjectZodSchema = makeSchema();
