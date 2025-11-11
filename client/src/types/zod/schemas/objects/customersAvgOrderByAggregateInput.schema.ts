import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional()
}).strict();
export const customersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.customersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.customersAvgOrderByAggregateInput>;
export const customersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
