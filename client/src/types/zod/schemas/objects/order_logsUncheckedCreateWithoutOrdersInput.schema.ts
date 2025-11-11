import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  log_timestamp: z.coerce.date().optional().nullable(),
  log_message: z.string(),
  log_details: z.string().optional().nullable()
}).strict();
export const order_logsUncheckedCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_logsUncheckedCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsUncheckedCreateWithoutOrdersInput>;
export const order_logsUncheckedCreateWithoutOrdersInputObjectZodSchema = makeSchema();
