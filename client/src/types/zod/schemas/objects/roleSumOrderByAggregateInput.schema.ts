import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const roleSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.roleSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.roleSumOrderByAggregateInput>;
export const roleSumOrderByAggregateInputObjectZodSchema = makeSchema();
