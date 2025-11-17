import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const attendanceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.attendanceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceOrderByRelationAggregateInput>;
export const attendanceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
