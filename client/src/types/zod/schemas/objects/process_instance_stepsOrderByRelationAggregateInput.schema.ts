import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const process_instance_stepsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.process_instance_stepsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsOrderByRelationAggregateInput>;
export const process_instance_stepsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
