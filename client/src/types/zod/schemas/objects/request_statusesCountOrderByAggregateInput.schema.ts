import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const request_statusesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.request_statusesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesCountOrderByAggregateInput>;
export const request_statusesCountOrderByAggregateInputObjectZodSchema = makeSchema();
