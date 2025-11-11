import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsOrderByWithRelationInputObjectSchema as shop_sectionsOrderByWithRelationInputObjectSchema } from './objects/shop_sectionsOrderByWithRelationInput.schema';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './objects/shop_sectionsWhereInput.schema';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './objects/shop_sectionsWhereUniqueInput.schema';
import { Shop_sectionsCountAggregateInputObjectSchema as Shop_sectionsCountAggregateInputObjectSchema } from './objects/Shop_sectionsCountAggregateInput.schema';

export const shop_sectionsCountSchema: z.ZodType<Prisma.shop_sectionsCountArgs> = z.object({ orderBy: z.union([shop_sectionsOrderByWithRelationInputObjectSchema, shop_sectionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: shop_sectionsWhereInputObjectSchema.optional(), cursor: shop_sectionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Shop_sectionsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.shop_sectionsCountArgs>;

export const shop_sectionsCountZodSchema = z.object({ orderBy: z.union([shop_sectionsOrderByWithRelationInputObjectSchema, shop_sectionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: shop_sectionsWhereInputObjectSchema.optional(), cursor: shop_sectionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Shop_sectionsCountAggregateInputObjectSchema ]).optional() }).strict();