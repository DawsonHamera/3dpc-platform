import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsSelectObjectSchema as order_logsSelectObjectSchema } from './objects/order_logsSelect.schema';
import { order_logsIncludeObjectSchema as order_logsIncludeObjectSchema } from './objects/order_logsInclude.schema';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './objects/order_logsWhereUniqueInput.schema';

export const order_logsDeleteOneSchema: z.ZodType<Prisma.order_logsDeleteArgs> = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), where: order_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.order_logsDeleteArgs>;

export const order_logsDeleteOneZodSchema = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), where: order_logsWhereUniqueInputObjectSchema }).strict();