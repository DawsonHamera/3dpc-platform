import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  uploaded_by: SortOrderSchema.optional()
}).strict();
export const fileAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.fileAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.fileAvgOrderByAggregateInput>;
export const fileAvgOrderByAggregateInputObjectZodSchema = makeSchema();
