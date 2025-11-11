import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsIncludeObjectSchema as shop_sectionsIncludeObjectSchema } from './objects/shop_sectionsInclude.schema';
import { shop_sectionsOrderByWithRelationInputObjectSchema as shop_sectionsOrderByWithRelationInputObjectSchema } from './objects/shop_sectionsOrderByWithRelationInput.schema';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './objects/shop_sectionsWhereInput.schema';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './objects/shop_sectionsWhereUniqueInput.schema';
import { ShopSectionsScalarFieldEnumSchema } from './enums/ShopSectionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const shop_sectionsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.shop_sectionsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    label: z.boolean().optional(),
    order_index: z.boolean().optional(),
    products: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.shop_sectionsSelect>;

export const shop_sectionsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    label: z.boolean().optional(),
    order_index: z.boolean().optional(),
    products: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const shop_sectionsFindFirstOrThrowSchema: z.ZodType<Prisma.shop_sectionsFindFirstOrThrowArgs> = z.object({ select: shop_sectionsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => shop_sectionsIncludeObjectSchema.optional()), orderBy: z.union([shop_sectionsOrderByWithRelationInputObjectSchema, shop_sectionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: shop_sectionsWhereInputObjectSchema.optional(), cursor: shop_sectionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ShopSectionsScalarFieldEnumSchema, ShopSectionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.shop_sectionsFindFirstOrThrowArgs>;

export const shop_sectionsFindFirstOrThrowZodSchema = z.object({ select: shop_sectionsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => shop_sectionsIncludeObjectSchema.optional()), orderBy: z.union([shop_sectionsOrderByWithRelationInputObjectSchema, shop_sectionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: shop_sectionsWhereInputObjectSchema.optional(), cursor: shop_sectionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ShopSectionsScalarFieldEnumSchema, ShopSectionsScalarFieldEnumSchema.array()]).optional() }).strict();