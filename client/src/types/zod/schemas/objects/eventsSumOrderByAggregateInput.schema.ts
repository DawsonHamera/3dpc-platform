import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  created_by: SortOrderSchema.optional()
}).strict();
export const eventsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.eventsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsSumOrderByAggregateInput>;
export const eventsSumOrderByAggregateInputObjectZodSchema = makeSchema();
