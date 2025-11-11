import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsSelectObjectSchema as order_logsSelectObjectSchema } from './objects/order_logsSelect.schema';
import { order_logsIncludeObjectSchema as order_logsIncludeObjectSchema } from './objects/order_logsInclude.schema';
import { order_logsUpdateInputObjectSchema as order_logsUpdateInputObjectSchema } from './objects/order_logsUpdateInput.schema';
import { order_logsUncheckedUpdateInputObjectSchema as order_logsUncheckedUpdateInputObjectSchema } from './objects/order_logsUncheckedUpdateInput.schema';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './objects/order_logsWhereUniqueInput.schema';

export const order_logsUpdateOneSchema: z.ZodType<Prisma.order_logsUpdateArgs> = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), data: z.union([order_logsUpdateInputObjectSchema, order_logsUncheckedUpdateInputObjectSchema]), where: order_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.order_logsUpdateArgs>;

export const order_logsUpdateOneZodSchema = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), data: z.union([order_logsUpdateInputObjectSchema, order_logsUncheckedUpdateInputObjectSchema]), where: order_logsWhereUniqueInputObjectSchema }).strict();