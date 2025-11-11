import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  batch: SortOrderSchema.optional()
}).strict();
export const migrationsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.migrationsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsSumOrderByAggregateInput>;
export const migrationsSumOrderByAggregateInputObjectZodSchema = makeSchema();
