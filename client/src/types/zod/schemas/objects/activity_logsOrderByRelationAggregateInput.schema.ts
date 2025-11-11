import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const activity_logsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.activity_logsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsOrderByRelationAggregateInput>;
export const activity_logsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
