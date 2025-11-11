import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  record_id: SortOrderSchema.optional()
}).strict();
export const activity_logsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.activity_logsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsSumOrderByAggregateInput>;
export const activity_logsSumOrderByAggregateInputObjectZodSchema = makeSchema();
