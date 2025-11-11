import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const order_logsWhereUniqueInputObjectSchema: z.ZodType<Prisma.order_logsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsWhereUniqueInput>;
export const order_logsWhereUniqueInputObjectZodSchema = makeSchema();
