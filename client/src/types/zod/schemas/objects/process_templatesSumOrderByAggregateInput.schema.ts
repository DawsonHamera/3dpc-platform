import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  estimated_duration: SortOrderSchema.optional()
}).strict();
export const process_templatesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_templatesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesSumOrderByAggregateInput>;
export const process_templatesSumOrderByAggregateInputObjectZodSchema = makeSchema();
