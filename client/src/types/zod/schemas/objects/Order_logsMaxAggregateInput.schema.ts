import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order_id: z.literal(true).optional(),
  log_timestamp: z.literal(true).optional(),
  log_message: z.literal(true).optional(),
  log_details: z.literal(true).optional()
}).strict();
export const Order_logsMaxAggregateInputObjectSchema: z.ZodType<Prisma.Order_logsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Order_logsMaxAggregateInputType>;
export const Order_logsMaxAggregateInputObjectZodSchema = makeSchema();
