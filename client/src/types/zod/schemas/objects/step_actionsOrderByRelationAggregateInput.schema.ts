import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const step_actionsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.step_actionsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsOrderByRelationAggregateInput>;
export const step_actionsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
