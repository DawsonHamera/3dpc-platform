import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsWhereInputObjectSchema as order_itemsWhereInputObjectSchema } from './objects/order_itemsWhereInput.schema';

export const order_itemsDeleteManySchema: z.ZodType<Prisma.order_itemsDeleteManyArgs> = z.object({ where: order_itemsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.order_itemsDeleteManyArgs>;

export const order_itemsDeleteManyZodSchema = z.object({ where: order_itemsWhereInputObjectSchema.optional() }).strict();