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
export const printer_statusesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.printer_statusesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesMinOrderByAggregateInput>;
export const printer_statusesMinOrderByAggregateInputObjectZodSchema = makeSchema();
