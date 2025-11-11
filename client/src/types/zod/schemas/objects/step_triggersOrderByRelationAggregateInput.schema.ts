import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const step_triggersOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.step_triggersOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersOrderByRelationAggregateInput>;
export const step_triggersOrderByRelationAggregateInputObjectZodSchema = makeSchema();
