import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  product_id: z.number().int(),
  quantity: z.number().int(),
  unit_price: z.number().optional().nullable(),
  status: z.string().max(255).optional().nullable(),
  total_price: z.number().optional().nullable()
}).strict();
export const order_itemsCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_itemsCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsCreateWithoutOrdersInput>;
export const order_itemsCreateWithoutOrdersInputObjectZodSchema = makeSchema();
