import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsSelectObjectSchema as order_itemsSelectObjectSchema } from './objects/order_itemsSelect.schema';
import { order_itemsIncludeObjectSchema as order_itemsIncludeObjectSchema } from './objects/order_itemsInclude.schema';
import { order_itemsCreateInputObjectSchema as order_itemsCreateInputObjectSchema } from './objects/order_itemsCreateInput.schema';
import { order_itemsUncheckedCreateInputObjectSchema as order_itemsUncheckedCreateInputObjectSchema } from './objects/order_itemsUncheckedCreateInput.schema';

export const order_itemsCreateOneSchema: z.ZodType<Prisma.order_itemsCreateArgs> = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), data: z.union([order_itemsCreateInputObjectSchema, order_itemsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.order_itemsCreateArgs>;

export const order_itemsCreateOneZodSchema = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), data: z.union([order_itemsCreateInputObjectSchema, order_itemsUncheckedCreateInputObjectSchema]) }).strict();