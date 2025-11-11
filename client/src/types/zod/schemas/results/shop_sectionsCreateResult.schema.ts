import * as z from 'zod';
export const shop_sectionsCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string().optional(),
  label: z.string().optional(),
  order_index: z.number().int().optional(),
  products: z.array(z.unknown())
});