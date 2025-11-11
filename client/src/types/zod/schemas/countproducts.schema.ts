import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsOrderByWithRelationInputObjectSchema as productsOrderByWithRelationInputObjectSchema } from './objects/productsOrderByWithRelationInput.schema';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './objects/productsWhereInput.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './objects/productsWhereUniqueInput.schema';
import { ProductsCountAggregateInputObjectSchema as ProductsCountAggregateInputObjectSchema } from './objects/ProductsCountAggregateInput.schema';

export const productsCountSchema: z.ZodType<Prisma.productsCountArgs> = z.object({ orderBy: z.union([productsOrderByWithRelationInputObjectSchema, productsOrderByWithRelationInputObjectSchema.array()]).optional(), where: productsWhereInputObjectSchema.optional(), cursor: productsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.productsCountArgs>;

export const productsCountZodSchema = z.object({ orderBy: z.union([productsOrderByWithRelationInputObjectSchema, productsOrderByWithRelationInputObjectSchema.array()]).optional(), where: productsWhereInputObjectSchema.optional(), cursor: productsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductsCountAggregateInputObjectSchema ]).optional() }).strict();