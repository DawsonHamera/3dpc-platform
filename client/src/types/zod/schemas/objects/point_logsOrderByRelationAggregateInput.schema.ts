import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const point_logsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.point_logsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsOrderByRelationAggregateInput>;
export const point_logsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
