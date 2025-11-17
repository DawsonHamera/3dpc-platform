import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  uploaded_by: SortOrderSchema.optional()
}).strict();
export const fileSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.fileSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.fileSumOrderByAggregateInput>;
export const fileSumOrderByAggregateInputObjectZodSchema = makeSchema();
