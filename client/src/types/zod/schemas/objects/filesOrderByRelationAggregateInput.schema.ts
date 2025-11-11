import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const filesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.filesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.filesOrderByRelationAggregateInput>;
export const filesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
