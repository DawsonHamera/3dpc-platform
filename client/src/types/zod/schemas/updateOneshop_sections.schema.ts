import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsSelectObjectSchema as shop_sectionsSelectObjectSchema } from './objects/shop_sectionsSelect.schema';
import { shop_sectionsIncludeObjectSchema as shop_sectionsIncludeObjectSchema } from './objects/shop_sectionsInclude.schema';
import { shop_sectionsUpdateInputObjectSchema as shop_sectionsUpdateInputObjectSchema } from './objects/shop_sectionsUpdateInput.schema';
import { shop_sectionsUncheckedUpdateInputObjectSchema as shop_sectionsUncheckedUpdateInputObjectSchema } from './objects/shop_sectionsUncheckedUpdateInput.schema';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './objects/shop_sectionsWhereUniqueInput.schema';

export const shop_sectionsUpdateOneSchema: z.ZodType<Prisma.shop_sectionsUpdateArgs> = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), data: z.union([shop_sectionsUpdateInputObjectSchema, shop_sectionsUncheckedUpdateInputObjectSchema]), where: shop_sectionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.shop_sectionsUpdateArgs>;

export const shop_sectionsUpdateOneZodSchema = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), data: z.union([shop_sectionsUpdateInputObjectSchema, shop_sectionsUncheckedUpdateInputObjectSchema]), where: shop_sectionsWhereUniqueInputObjectSchema }).strict();