import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const gradesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.gradesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesSumOrderByAggregateInput>;
export const gradesSumOrderByAggregateInputObjectZodSchema = makeSchema();
