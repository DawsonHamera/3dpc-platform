import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  first_name: z.literal(true).optional(),
  last_name: z.literal(true).optional(),
  email_address: z.literal(true).optional(),
  ip_address: z.literal(true).optional(),
  session_id: z.literal(true).optional(),
  first_seen: z.literal(true).optional(),
  last_seen: z.literal(true).optional(),
  preferred_shipping_address: z.literal(true).optional(),
  preferred_shipping_method: z.literal(true).optional()
}).strict();
export const CustomersMinAggregateInputObjectSchema: z.ZodType<Prisma.CustomersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomersMinAggregateInputType>;
export const CustomersMinAggregateInputObjectZodSchema = makeSchema();
