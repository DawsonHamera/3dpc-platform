import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  content_order: SortOrderSchema.optional()
}).strict();
export const step_contentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_contentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentAvgOrderByAggregateInput>;
export const step_contentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
