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
export const point_logCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.point_logCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logCountOrderByAggregateInput>;
export const point_logCountOrderByAggregateInputObjectZodSchema = makeSchema();
