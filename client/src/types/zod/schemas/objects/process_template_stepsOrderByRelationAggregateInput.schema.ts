import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const process_template_stepsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.process_template_stepsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsOrderByRelationAggregateInput>;
export const process_template_stepsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
