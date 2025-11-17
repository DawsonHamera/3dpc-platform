import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const fileOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.fileOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.fileOrderByRelationAggregateInput>;
export const fileOrderByRelationAggregateInputObjectZodSchema = makeSchema();
