import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional()
}).strict();
export const requestsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.requestsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsSumOrderByAggregateInput>;
export const requestsSumOrderByAggregateInputObjectZodSchema = makeSchema();
