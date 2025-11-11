import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsSelectObjectSchema as order_itemsSelectObjectSchema } from './objects/order_itemsSelect.schema';
import { order_itemsIncludeObjectSchema as order_itemsIncludeObjectSchema } from './objects/order_itemsInclude.schema';
import { order_itemsUpdateInputObjectSchema as order_itemsUpdateInputObjectSchema } from './objects/order_itemsUpdateInput.schema';
import { order_itemsUncheckedUpdateInputObjectSchema as order_itemsUncheckedUpdateInputObjectSchema } from './objects/order_itemsUncheckedUpdateInput.schema';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './objects/order_itemsWhereUniqueInput.schema';

export const order_itemsUpdateOneSchema: z.ZodType<Prisma.order_itemsUpdateArgs> = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), data: z.union([order_itemsUpdateInputObjectSchema, order_itemsUncheckedUpdateInputObjectSchema]), where: order_itemsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.order_itemsUpdateArgs>;

export const order_itemsUpdateOneZodSchema = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), data: z.union([order_itemsUpdateInputObjectSchema, order_itemsUncheckedUpdateInputObjectSchema]), where: order_itemsWhereUniqueInputObjectSchema }).strict();