import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  log_timestamp: z.coerce.date().optional().nullable(),
  log_message: z.string(),
  log_details: z.string().optional().nullable()
}).strict();
export const order_logsCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_logsCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsCreateWithoutOrdersInput>;
export const order_logsCreateWithoutOrdersInputObjectZodSchema = makeSchema();
