import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const product_variantsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.product_variantsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsOrderByRelationAggregateInput>;
export const product_variantsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
