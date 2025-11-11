import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsWhereInputObjectSchema as order_logsWhereInputObjectSchema } from './objects/order_logsWhereInput.schema';

export const order_logsDeleteManySchema: z.ZodType<Prisma.order_logsDeleteManyArgs> = z.object({ where: order_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.order_logsDeleteManyArgs>;

export const order_logsDeleteManyZodSchema = z.object({ where: order_logsWhereInputObjectSchema.optional() }).strict();