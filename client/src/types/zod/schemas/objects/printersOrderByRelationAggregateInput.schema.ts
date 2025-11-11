import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const printersOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.printersOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.printersOrderByRelationAggregateInput>;
export const printersOrderByRelationAggregateInputObjectZodSchema = makeSchema();
