import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsSelectObjectSchema as shop_sectionsSelectObjectSchema } from './objects/shop_sectionsSelect.schema';
import { shop_sectionsIncludeObjectSchema as shop_sectionsIncludeObjectSchema } from './objects/shop_sectionsInclude.schema';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './objects/shop_sectionsWhereUniqueInput.schema';

export const shop_sectionsFindUniqueSchema: z.ZodType<Prisma.shop_sectionsFindUniqueArgs> = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), where: shop_sectionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.shop_sectionsFindUniqueArgs>;

export const shop_sectionsFindUniqueZodSchema = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), where: shop_sectionsWhereUniqueInputObjectSchema }).strict();