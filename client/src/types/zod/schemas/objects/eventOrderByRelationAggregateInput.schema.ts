import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const eventOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.eventOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.eventOrderByRelationAggregateInput>;
export const eventOrderByRelationAggregateInputObjectZodSchema = makeSchema();
