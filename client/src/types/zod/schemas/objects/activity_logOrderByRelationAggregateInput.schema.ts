import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const activity_logOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.activity_logOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logOrderByRelationAggregateInput>;
export const activity_logOrderByRelationAggregateInputObjectZodSchema = makeSchema();
