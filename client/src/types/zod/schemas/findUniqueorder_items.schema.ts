import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsSelectObjectSchema as order_itemsSelectObjectSchema } from './objects/order_itemsSelect.schema';
import { order_itemsIncludeObjectSchema as order_itemsIncludeObjectSchema } from './objects/order_itemsInclude.schema';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './objects/order_itemsWhereUniqueInput.schema';

export const order_itemsFindUniqueSchema: z.ZodType<Prisma.order_itemsFindUniqueArgs> = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), where: order_itemsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.order_itemsFindUniqueArgs>;

export const order_itemsFindUniqueZodSchema = z.object({ select: order_itemsSelectObjectSchema.optional(), include: order_itemsIncludeObjectSchema.optional(), where: order_itemsWhereUniqueInputObjectSchema }).strict();