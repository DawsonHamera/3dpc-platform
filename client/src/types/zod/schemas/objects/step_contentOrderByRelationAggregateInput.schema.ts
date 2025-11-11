import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const step_contentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.step_contentOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentOrderByRelationAggregateInput>;
export const step_contentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
