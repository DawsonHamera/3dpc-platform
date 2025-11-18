import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  details: SortOrderSchema.optional(),
  logged_at: SortOrderSchema.optional()
}).strict();
export const point_logMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.point_logMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logMinOrderByAggregateInput>;
export const point_logMinOrderByAggregateInputObjectZodSchema = makeSchema();
