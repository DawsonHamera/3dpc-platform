import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersArgsObjectSchema as ordersArgsObjectSchema } from './ordersArgs.schema'

const makeSchema = () => z.object({
  orders: z.union([z.boolean(), z.lazy(() => ordersArgsObjectSchema)]).optional()
}).strict();
export const order_itemsIncludeObjectSchema: z.ZodType<Prisma.order_itemsInclude> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsInclude>;
export const order_itemsIncludeObjectZodSchema = makeSchema();
