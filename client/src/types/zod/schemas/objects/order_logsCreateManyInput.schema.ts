import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  order_id: z.number().int(),
  log_timestamp: z.coerce.date().optional().nullable(),
  log_message: z.string(),
  log_details: z.string().optional().nullable()
}).strict();
export const order_logsCreateManyInputObjectSchema: z.ZodType<Prisma.order_logsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsCreateManyInput>;
export const order_logsCreateManyInputObjectZodSchema = makeSchema();
