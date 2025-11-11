import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const stepsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.stepsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsSumOrderByAggregateInput>;
export const stepsSumOrderByAggregateInputObjectZodSchema = makeSchema();
