import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const usersOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.usersOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.usersOrderByRelationAggregateInput>;
export const usersOrderByRelationAggregateInputObjectZodSchema = makeSchema();
