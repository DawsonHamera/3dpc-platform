import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional()
}).strict();
export const eventSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.eventSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.eventSumOrderByAggregateInput>;
export const eventSumOrderByAggregateInputObjectZodSchema = makeSchema();
