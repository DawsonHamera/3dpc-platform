import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { product_variantsIncludeObjectSchema as product_variantsIncludeObjectSchema } from './objects/product_variantsInclude.schema';
import { product_variantsOrderByWithRelationInputObjectSchema as product_variantsOrderByWithRelationInputObjectSchema } from './objects/product_variantsOrderByWithRelationInput.schema';
import { product_variantsWhereInputObjectSchema as product_variantsWhereInputObjectSchema } from './objects/product_variantsWhereInput.schema';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './objects/product_variantsWhereUniqueInput.schema';
import { ProductVariantsScalarFieldEnumSchema } from './enums/ProductVariantsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const product_variantsFindManySelectSchema: z.ZodType<Prisma.product_variantsSelect> = z.object({
    id: z.boolean().optional(),
    material_id: z.boolean().optional(),
    name: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    background_color: z.boolean().optional(),
    model_color: z.boolean().optional(),
    product_id: z.boolean().optional(),
    products: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.product_variantsSelect>;

export const product_variantsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    material_id: z.boolean().optional(),
    name: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    background_color: z.boolean().optional(),
    model_color: z.boolean().optional(),
    product_id: z.boolean().optional(),
    products: z.boolean().optional()
  }).strict();

export const product_variantsFindManySchema: z.ZodType<Prisma.product_variantsFindManyArgs> = z.object({ select: product_variantsFindManySelectSchema.optional(), include: z.lazy(() => product_variantsIncludeObjectSchema.optional()), orderBy: z.union([product_variantsOrderByWithRelationInputObjectSchema, product_variantsOrderByWithRelationInputObjectSchema.array()]).optional(), where: product_variantsWhereInputObjectSchema.optional(), cursor: product_variantsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductVariantsScalarFieldEnumSchema, ProductVariantsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.product_variantsFindManyArgs>;

export const product_variantsFindManyZodSchema = z.object({ select: product_variantsFindManySelectSchema.optional(), include: z.lazy(() => product_variantsIncludeObjectSchema.optional()), orderBy: z.union([product_variantsOrderByWithRelationInputObjectSchema, product_variantsOrderByWithRelationInputObjectSchema.array()]).optional(), where: product_variantsWhereInputObjectSchema.optional(), cursor: product_variantsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductVariantsScalarFieldEnumSchema, ProductVariantsScalarFieldEnumSchema.array()]).optional() }).strict();