import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const attendancesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.attendancesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesOrderByRelationAggregateInput>;
export const attendancesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
