import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const order_itemsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.order_itemsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsOrderByRelationAggregateInput>;
export const order_itemsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
