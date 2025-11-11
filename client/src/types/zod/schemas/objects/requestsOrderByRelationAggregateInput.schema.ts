import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const requestsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.requestsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsOrderByRelationAggregateInput>;
export const requestsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
