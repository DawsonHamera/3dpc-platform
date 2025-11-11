import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsUpdateManyMutationInputObjectSchema as order_itemsUpdateManyMutationInputObjectSchema } from './objects/order_itemsUpdateManyMutationInput.schema';
import { order_itemsWhereInputObjectSchema as order_itemsWhereInputObjectSchema } from './objects/order_itemsWhereInput.schema';

export const order_itemsUpdateManySchema: z.ZodType<Prisma.order_itemsUpdateManyArgs> = z.object({ data: order_itemsUpdateManyMutationInputObjectSchema, where: order_itemsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.order_itemsUpdateManyArgs>;

export const order_itemsUpdateManyZodSchema = z.object({ data: order_itemsUpdateManyMutationInputObjectSchema, where: order_itemsWhereInputObjectSchema.optional() }).strict();