import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  first_name: z.string().max(100).optional().nullable(),
  last_name: z.string().max(100).optional().nullable(),
  email_address: z.string().max(100).optional().nullable(),
  ip_address: z.string().max(100).optional().nullable(),
  session_id: z.number().int().optional().nullable(),
  first_seen: z.coerce.date().optional().nullable(),
  last_seen: z.coerce.date().optional().nullable(),
  preferred_shipping_address: z.string().max(100).optional().nullable(),
  preferred_shipping_method: z.string().max(100).optional().nullable()
}).strict();
export const customersCreateManyInputObjectSchema: z.ZodType<Prisma.customersCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.customersCreateManyInput>;
export const customersCreateManyInputObjectZodSchema = makeSchema();
