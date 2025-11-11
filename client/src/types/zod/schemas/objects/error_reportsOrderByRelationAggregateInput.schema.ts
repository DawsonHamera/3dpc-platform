import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const error_reportsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.error_reportsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsOrderByRelationAggregateInput>;
export const error_reportsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
