import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const recycling_logOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.recycling_logOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logOrderByRelationAggregateInput>;
export const recycling_logOrderByRelationAggregateInputObjectZodSchema = makeSchema();
