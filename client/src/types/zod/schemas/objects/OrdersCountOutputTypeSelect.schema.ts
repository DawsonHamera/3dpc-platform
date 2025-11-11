import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order_items: z.boolean().optional(),
  order_logs: z.boolean().optional()
}).strict();
export const OrdersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrdersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrdersCountOutputTypeSelect>;
export const OrdersCountOutputTypeSelectObjectZodSchema = makeSchema();
