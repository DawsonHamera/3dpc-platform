import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const point_logOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.point_logOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logOrderByRelationAggregateInput>;
export const point_logOrderByRelationAggregateInputObjectZodSchema = makeSchema();
