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
export const order_logsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.order_logsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsMaxOrderByAggregateInput>;
export const order_logsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
