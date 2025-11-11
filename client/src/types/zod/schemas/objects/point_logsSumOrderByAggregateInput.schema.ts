import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  change: SortOrderSchema.optional()
}).strict();
export const point_logsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.point_logsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsSumOrderByAggregateInput>;
export const point_logsSumOrderByAggregateInputObjectZodSchema = makeSchema();
