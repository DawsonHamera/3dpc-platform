import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  log_timestamp: SortOrderSchema.optional(),
  log_message: SortOrderSchema.optional(),
  log_details: SortOrderSchema.optional()
}).strict();
export const order_logsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.order_logsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsMinOrderByAggregateInput>;
export const order_logsMinOrderByAggregateInputObjectZodSchema = makeSchema();
