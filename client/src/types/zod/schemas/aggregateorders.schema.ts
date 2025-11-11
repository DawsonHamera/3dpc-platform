import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersOrderByWithRelationInputObjectSchema as ordersOrderByWithRelationInputObjectSchema } from './objects/ordersOrderByWithRelationInput.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './objects/ordersWhereInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './objects/ordersWhereUniqueInput.schema';
import { OrdersCountAggregateInputObjectSchema as OrdersCountAggregateInputObjectSchema } from './objects/OrdersCountAggregateInput.schema';
import { OrdersMinAggregateInputObjectSchema as OrdersMinAggregateInputObjectSchema } from './objects/OrdersMinAggregateInput.schema';
import { OrdersMaxAggregateInputObjectSchema as OrdersMaxAggregateInputObjectSchema } from './objects/OrdersMaxAggregateInput.schema';
import { OrdersAvgAggregateInputObjectSchema as OrdersAvgAggregateInputObjectSchema } from './objects/OrdersAvgAggregateInput.schema';
import { OrdersSumAggregateInputObjectSchema as OrdersSumAggregateInputObjectSchema } from './objects/OrdersSumAggregateInput.schema';

export const ordersAggregateSchema: z.ZodType<Prisma.ordersAggregateArgs> = z.object({ orderBy: z.union([ordersOrderByWithRelationInputObjectSchema, ordersOrderByWithRelationInputObjectSchema.array()]).optional(), where: ordersWhereInputObjectSchema.optional(), cursor: ordersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), OrdersCountAggregateInputObjectSchema ]).optional(), _min: OrdersMinAggregateInputObjectSchema.optional(), _max: OrdersMaxAggregateInputObjectSchema.optional(), _avg: OrdersAvgAggregateInputObjectSchema.optional(), _sum: OrdersSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ordersAggregateArgs>;

export const ordersAggregateZodSchema = z.object({ orderBy: z.union([ordersOrderByWithRelationInputObjectSchema, ordersOrderByWithRelationInputObjectSchema.array()]).optional(), where: ordersWhereInputObjectSchema.optional(), cursor: ordersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), OrdersCountAggregateInputObjectSchema ]).optional(), _min: OrdersMinAggregateInputObjectSchema.optional(), _max: OrdersMaxAggregateInputObjectSchema.optional(), _avg: OrdersAvgAggregateInputObjectSchema.optional(), _sum: OrdersSumAggregateInputObjectSchema.optional() }).strict();