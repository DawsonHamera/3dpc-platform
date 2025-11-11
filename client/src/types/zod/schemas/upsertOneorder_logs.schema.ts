import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsSelectObjectSchema as order_logsSelectObjectSchema } from './objects/order_logsSelect.schema';
import { order_logsIncludeObjectSchema as order_logsIncludeObjectSchema } from './objects/order_logsInclude.schema';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './objects/order_logsWhereUniqueInput.schema';
import { order_logsCreateInputObjectSchema as order_logsCreateInputObjectSchema } from './objects/order_logsCreateInput.schema';
import { order_logsUncheckedCreateInputObjectSchema as order_logsUncheckedCreateInputObjectSchema } from './objects/order_logsUncheckedCreateInput.schema';
import { order_logsUpdateInputObjectSchema as order_logsUpdateInputObjectSchema } from './objects/order_logsUpdateInput.schema';
import { order_logsUncheckedUpdateInputObjectSchema as order_logsUncheckedUpdateInputObjectSchema } from './objects/order_logsUncheckedUpdateInput.schema';

export const order_logsUpsertOneSchema: z.ZodType<Prisma.order_logsUpsertArgs> = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), where: order_logsWhereUniqueInputObjectSchema, create: z.union([ order_logsCreateInputObjectSchema, order_logsUncheckedCreateInputObjectSchema ]), update: z.union([ order_logsUpdateInputObjectSchema, order_logsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.order_logsUpsertArgs>;

export const order_logsUpsertOneZodSchema = z.object({ select: order_logsSelectObjectSchema.optional(), include: order_logsIncludeObjectSchema.optional(), where: order_logsWhereUniqueInputObjectSchema, create: z.union([ order_logsCreateInputObjectSchema, order_logsUncheckedCreateInputObjectSchema ]), update: z.union([ order_logsUpdateInputObjectSchema, order_logsUncheckedUpdateInputObjectSchema ]) }).strict();