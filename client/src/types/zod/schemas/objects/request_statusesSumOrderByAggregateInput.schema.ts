import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const request_statusesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.request_statusesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesSumOrderByAggregateInput>;
export const request_statusesSumOrderByAggregateInputObjectZodSchema = makeSchema();
