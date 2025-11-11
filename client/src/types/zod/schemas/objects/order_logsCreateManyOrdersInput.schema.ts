import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  log_timestamp: z.coerce.date().optional().nullable(),
  log_message: z.string(),
  log_details: z.string().optional().nullable()
}).strict();
export const order_logsCreateManyOrdersInputObjectSchema: z.ZodType<Prisma.order_logsCreateManyOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsCreateManyOrdersInput>;
export const order_logsCreateManyOrdersInputObjectZodSchema = makeSchema();
