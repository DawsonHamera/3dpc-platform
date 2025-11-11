import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersCreateNestedOneWithoutOrder_logsInputObjectSchema as ordersCreateNestedOneWithoutOrder_logsInputObjectSchema } from './ordersCreateNestedOneWithoutOrder_logsInput.schema'

const makeSchema = () => z.object({
  log_timestamp: z.coerce.date().optional().nullable(),
  log_message: z.string(),
  log_details: z.string().optional().nullable(),
  orders: z.lazy(() => ordersCreateNestedOneWithoutOrder_logsInputObjectSchema)
}).strict();
export const order_logsCreateInputObjectSchema: z.ZodType<Prisma.order_logsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsCreateInput>;
export const order_logsCreateInputObjectZodSchema = makeSchema();
