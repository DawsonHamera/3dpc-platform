import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const roleAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.roleAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.roleAvgOrderByAggregateInput>;
export const roleAvgOrderByAggregateInputObjectZodSchema = makeSchema();
