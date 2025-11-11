import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsSelectObjectSchema as order_itemsSelectObjectSchema } from './objects/order_itemsSelect.schema';
import { order_itemsIncludeObjectSchema as order_itemsIncludeObjectSchema } from './objects/order_itemsInclude.schema';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './objects/order_itemsWhereUniqueInput.schema';
import { order_itemsCreateInputObjectSchema as order_itemsCreateInputObjectSchema } from './objects/order_itemsCreateInput.schema';
import { order_itemsUncheckedCreateInputObjectSchema as order_itemsUncheckedCreateInputObjectSchema } from './objects/order_itemsUncheckedCreateInput.schema';
import { order_itemsUpdateInputObjectSchema as order_itemsUpdateInputObjectSchema } from './objects/order_itemsUpdateInput.schema';
import { order_itemsUncheckedUpdateInputObjectSchema as order_itemsUncheckedUpdateInputObjectSchema } from './objects/order_itemsUncheckedUpdateInput.schema';

export const order_itemsUpsertOneSchema: z.ZodType<Prisma.order_itemsUpsertArgs> = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), where: order_itemsWhereUniqueInputObjectSchema, create: z.union([ order_itemsCreateInputObjectSchema, order_itemsUncheckedCreateInputObjectSchema ]), update: z.union([ order_itemsUpdateInputObjectSchema, order_itemsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.order_itemsUpsertArgs>;

export const order_itemsUpsertOneZodSchema = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), where: order_itemsWhereUniqueInputObjectSchema, create: z.union([ order_itemsCreateInputObjectSchema, order_itemsUncheckedCreateInputObjectSchema ]), update: z.union([ order_itemsUpdateInputObjectSchema, order_itemsUncheckedUpdateInputObjectSchema ]) }).strict();