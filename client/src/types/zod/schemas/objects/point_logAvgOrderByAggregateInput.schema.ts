import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  change: SortOrderSchema.optional()
}).strict();
export const point_logAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.point_logAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logAvgOrderByAggregateInput>;
export const point_logAvgOrderByAggregateInputObjectZodSchema = makeSchema();
