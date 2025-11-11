import * as z from 'zod';
export const customersDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email_address: z.string().optional(),
  ip_address: z.string().optional(),
  session_id: z.number().int().optional(),
  first_seen: z.date().optional(),
  last_seen: z.date().optional(),
  preferred_shipping_address: z.string().optional(),
  preferred_shipping_method: z.string().optional()
}));