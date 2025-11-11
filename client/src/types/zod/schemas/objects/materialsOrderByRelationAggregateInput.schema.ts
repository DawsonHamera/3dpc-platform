import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const materialsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.materialsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsOrderByRelationAggregateInput>;
export const materialsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
