import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './objects/productsInclude.schema';
import { productsOrderByWithRelationInputObjectSchema as productsOrderByWithRelationInputObjectSchema } from './objects/productsOrderByWithRelationInput.schema';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './objects/productsWhereInput.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './objects/productsWhereUniqueInput.schema';
import { ProductsScalarFieldEnumSchema } from './enums/ProductsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const productsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.productsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    model_id: z.boolean().optional(),
    default_variant_id: z.boolean().optional(),
    custom_options: z.boolean().optional(),
    tags: z.boolean().optional(),
    section_id: z.boolean().optional(),
    product_variants: z.boolean().optional(),
    models: z.boolean().optional(),
    shop_sections: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.productsSelect>;

export const productsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    model_id: z.boolean().optional(),
    default_variant_id: z.boolean().optional(),
    custom_options: z.boolean().optional(),
    tags: z.boolean().optional(),
    section_id: z.boolean().optional(),
    product_variants: z.boolean().optional(),
    models: z.boolean().optional(),
    shop_sections: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const productsFindFirstOrThrowSchema: z.ZodType<Prisma.productsFindFirstOrThrowArgs> = z.object({ select: productsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => productsIncludeObjectSchema.optional()), orderBy: z.union([productsOrderByWithRelationInputObjectSchema, productsOrderByWithRelationInputObjectSchema.array()]).optional(), where: productsWhereInputObjectSchema.optional(), cursor: productsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductsScalarFieldEnumSchema, ProductsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.productsFindFirstOrThrowArgs>;

export const productsFindFirstOrThrowZodSchema = z.object({ select: productsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => productsIncludeObjectSchema.optional()), orderBy: z.union([productsOrderByWithRelationInputObjectSchema, productsOrderByWithRelationInputObjectSchema.array()]).optional(), where: productsWhereInputObjectSchema.optional(), cursor: productsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductsScalarFieldEnumSchema, ProductsScalarFieldEnumSchema.array()]).optional() }).strict();