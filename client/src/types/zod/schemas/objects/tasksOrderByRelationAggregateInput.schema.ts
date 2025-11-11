import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tasksOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tasksOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksOrderByRelationAggregateInput>;
export const tasksOrderByRelationAggregateInputObjectZodSchema = makeSchema();
