import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  customer_id: z.number().int().optional().nullable(),
  order_date: z.coerce.date().optional().nullable(),
  requested_by_date: z.coerce.date().optional().nullable(),
  order_status: z.string().max(255).optional().nullable(),
  payment_status: z.string().max(255).optional().nullable(),
  shipping_method: z.string().max(255).optional().nullable(),
  shipping_address: z.string().max(100).optional().nullable(),
  total_price: z.number().optional().nullable()
}).strict();
export const ordersCreateManyInputObjectSchema: z.ZodType<Prisma.ordersCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersCreateManyInput>;
export const ordersCreateManyInputObjectZodSchema = makeSchema();
