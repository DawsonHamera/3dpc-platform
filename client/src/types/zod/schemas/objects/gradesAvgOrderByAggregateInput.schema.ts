import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const gradesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.gradesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesAvgOrderByAggregateInput>;
export const gradesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
