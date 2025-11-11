import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema as ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema } from './ordersCreateNestedOneWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  product_id: z.number().int(),
  quantity: z.number().int(),
  unit_price: z.number().optional().nullable(),
  status: z.string().max(255).optional().nullable(),
  total_price: z.number().optional().nullable(),
  orders: z.lazy(() => ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema)
}).strict();
export const order_itemsCreateInputObjectSchema: z.ZodType<Prisma.order_itemsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsCreateInput>;
export const order_itemsCreateInputObjectZodSchema = makeSchema();
