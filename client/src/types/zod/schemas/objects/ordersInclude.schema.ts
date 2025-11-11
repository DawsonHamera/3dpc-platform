import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsFindManySchema as order_itemsFindManySchema } from '../findManyorder_items.schema';
import { order_logsFindManySchema as order_logsFindManySchema } from '../findManyorder_logs.schema';
import { OrdersCountOutputTypeArgsObjectSchema as OrdersCountOutputTypeArgsObjectSchema } from './OrdersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  order_items: z.union([z.boolean(), z.lazy(() => order_itemsFindManySchema)]).optional(),
  order_logs: z.union([z.boolean(), z.lazy(() => order_logsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrdersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ordersIncludeObjectSchema: z.ZodType<Prisma.ordersInclude> = makeSchema() as unknown as z.ZodType<Prisma.ordersInclude>;
export const ordersIncludeObjectZodSchema = makeSchema();
