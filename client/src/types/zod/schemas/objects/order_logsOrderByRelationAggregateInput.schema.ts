import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const order_logsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.order_logsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsOrderByRelationAggregateInput>;
export const order_logsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
