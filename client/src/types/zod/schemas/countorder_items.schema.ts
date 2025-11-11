import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsOrderByWithRelationInputObjectSchema as order_itemsOrderByWithRelationInputObjectSchema } from './objects/order_itemsOrderByWithRelationInput.schema';
import { order_itemsWhereInputObjectSchema as order_itemsWhereInputObjectSchema } from './objects/order_itemsWhereInput.schema';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './objects/order_itemsWhereUniqueInput.schema';
import { Order_itemsCountAggregateInputObjectSchema as Order_itemsCountAggregateInputObjectSchema } from './objects/Order_itemsCountAggregateInput.schema';

export const order_itemsCountSchema: z.ZodType<Prisma.order_itemsCountArgs> = z.object({ orderBy: z.union([order_itemsOrderByWithRelationInputObjectSchema, order_itemsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_itemsWhereInputObjectSchema.optional(), cursor: order_itemsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Order_itemsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.order_itemsCountArgs>;

export const order_itemsCountZodSchema = z.object({ orderBy: z.union([order_itemsOrderByWithRelationInputObjectSchema, order_itemsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_itemsWhereInputObjectSchema.optional(), cursor: order_itemsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Order_itemsCountAggregateInputObjectSchema ]).optional() }).strict();