import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  first_name: z.boolean().optional(),
  last_name: z.boolean().optional(),
  email_address: z.boolean().optional(),
  ip_address: z.boolean().optional(),
  session_id: z.boolean().optional(),
  first_seen: z.boolean().optional(),
  last_seen: z.boolean().optional(),
  preferred_shipping_address: z.boolean().optional(),
  preferred_shipping_method: z.boolean().optional()
}).strict();
export const customersSelectObjectSchema: z.ZodType<Prisma.customersSelect> = makeSchema() as unknown as z.ZodType<Prisma.customersSelect>;
export const customersSelectObjectZodSchema = makeSchema();
