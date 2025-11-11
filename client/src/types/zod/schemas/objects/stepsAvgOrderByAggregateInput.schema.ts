import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const stepsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.stepsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsAvgOrderByAggregateInput>;
export const stepsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
