import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional()
}).strict();
export const requestsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.requestsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsAvgOrderByAggregateInput>;
export const requestsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
