import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsSelectObjectSchema as order_logsSelectObjectSchema } from './objects/order_logsSelect.schema';
import { order_logsIncludeObjectSchema as order_logsIncludeObjectSchema } from './objects/order_logsInclude.schema';
import { order_logsCreateInputObjectSchema as order_logsCreateInputObjectSchema } from './objects/order_logsCreateInput.schema';
import { order_logsUncheckedCreateInputObjectSchema as order_logsUncheckedCreateInputObjectSchema } from './objects/order_logsUncheckedCreateInput.schema';

export const order_logsCreateOneSchema: z.ZodType<Prisma.order_logsCreateArgs> = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), data: z.union([order_logsCreateInputObjectSchema, order_logsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.order_logsCreateArgs>;

export const order_logsCreateOneZodSchema = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), data: z.union([order_logsCreateInputObjectSchema, order_logsUncheckedCreateInputObjectSchema]) }).strict();