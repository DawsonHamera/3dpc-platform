import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersArgsObjectSchema as ordersArgsObjectSchema } from './ordersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  log_timestamp: z.boolean().optional(),
  log_message: z.boolean().optional(),
  log_details: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => ordersArgsObjectSchema)]).optional()
}).strict();
export const order_logsSelectObjectSchema: z.ZodType<Prisma.order_logsSelect> = makeSchema() as unknown as z.ZodType<Prisma.order_logsSelect>;
export const order_logsSelectObjectZodSchema = makeSchema();
