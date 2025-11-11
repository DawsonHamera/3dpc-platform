import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsOrderByWithRelationInputObjectSchema as order_logsOrderByWithRelationInputObjectSchema } from './objects/order_logsOrderByWithRelationInput.schema';
import { order_logsWhereInputObjectSchema as order_logsWhereInputObjectSchema } from './objects/order_logsWhereInput.schema';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './objects/order_logsWhereUniqueInput.schema';
import { Order_logsCountAggregateInputObjectSchema as Order_logsCountAggregateInputObjectSchema } from './objects/Order_logsCountAggregateInput.schema';

export const order_logsCountSchema: z.ZodType<Prisma.order_logsCountArgs> = z.object({ orderBy: z.union([order_logsOrderByWithRelationInputObjectSchema, order_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_logsWhereInputObjectSchema.optional(), cursor: order_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Order_logsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.order_logsCountArgs>;

export const order_logsCountZodSchema = z.object({ orderBy: z.union([order_logsOrderByWithRelationInputObjectSchema, order_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_logsWhereInputObjectSchema.optional(), cursor: order_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Order_logsCountAggregateInputObjectSchema ]).optional() }).strict();