import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const request_statusesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.request_statusesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesAvgOrderByAggregateInput>;
export const request_statusesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
