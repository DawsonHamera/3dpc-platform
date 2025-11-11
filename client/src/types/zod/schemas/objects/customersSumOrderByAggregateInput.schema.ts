import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional()
}).strict();
export const customersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.customersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.customersSumOrderByAggregateInput>;
export const customersSumOrderByAggregateInputObjectZodSchema = makeSchema();
