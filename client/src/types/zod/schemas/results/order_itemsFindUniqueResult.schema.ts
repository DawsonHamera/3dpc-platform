import * as z from 'zod';
export const order_itemsFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  order_id: z.number().int(),
  product_id: z.number().int(),
  quantity: z.number().int(),
  unit_price: z.number().optional(),
  status: z.string().optional(),
  total_price: z.number().optional(),
  orders: z.unknown()
}));