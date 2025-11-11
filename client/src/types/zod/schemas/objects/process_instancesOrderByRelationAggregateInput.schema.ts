import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const process_instancesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.process_instancesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesOrderByRelationAggregateInput>;
export const process_instancesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
