import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersOrderByWithRelationInputObjectSchema as ordersOrderByWithRelationInputObjectSchema } from './objects/ordersOrderByWithRelationInput.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './objects/ordersWhereInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './objects/ordersWhereUniqueInput.schema';
import { OrdersCountAggregateInputObjectSchema as OrdersCountAggregateInputObjectSchema } from './objects/OrdersCountAggregateInput.schema';

export const ordersCountSchema: z.ZodType<Prisma.ordersCountArgs> = z.object({ orderBy: z.union([ordersOrderByWithRelationInputObjectSchema, ordersOrderByWithRelationInputObjectSchema.array()]).optional(), where: ordersWhereInputObjectSchema.optional(), cursor: ordersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrdersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ordersCountArgs>;

export const ordersCountZodSchema = z.object({ orderBy: z.union([ordersOrderByWithRelationInputObjectSchema, ordersOrderByWithRelationInputObjectSchema.array()]).optional(), where: ordersWhereInputObjectSchema.optional(), cursor: ordersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrdersCountAggregateInputObjectSchema ]).optional() }).strict();