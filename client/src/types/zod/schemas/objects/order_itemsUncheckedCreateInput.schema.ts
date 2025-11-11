import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  order_id: z.number().int(),
  product_id: z.number().int(),
  quantity: z.number().int(),
  unit_price: z.number().optional().nullable(),
  status: z.string().max(255).optional().nullable(),
  total_price: z.number().optional().nullable()
}).strict();
export const order_itemsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.order_itemsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsUncheckedCreateInput>;
export const order_itemsUncheckedCreateInputObjectZodSchema = makeSchema();
