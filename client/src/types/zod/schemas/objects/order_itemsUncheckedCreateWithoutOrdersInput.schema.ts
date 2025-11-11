import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  product_id: z.number().int(),
  quantity: z.number().int(),
  unit_price: z.number().optional().nullable(),
  status: z.string().optional().nullable(),
  total_price: z.number().optional().nullable()
}).strict();
export const order_itemsUncheckedCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_itemsUncheckedCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsUncheckedCreateWithoutOrdersInput>;
export const order_itemsUncheckedCreateWithoutOrdersInputObjectZodSchema = makeSchema();
