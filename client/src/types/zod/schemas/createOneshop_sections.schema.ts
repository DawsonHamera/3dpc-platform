import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsSelectObjectSchema as shop_sectionsSelectObjectSchema } from './objects/shop_sectionsSelect.schema';
import { shop_sectionsIncludeObjectSchema as shop_sectionsIncludeObjectSchema } from './objects/shop_sectionsInclude.schema';
import { shop_sectionsCreateInputObjectSchema as shop_sectionsCreateInputObjectSchema } from './objects/shop_sectionsCreateInput.schema';
import { shop_sectionsUncheckedCreateInputObjectSchema as shop_sectionsUncheckedCreateInputObjectSchema } from './objects/shop_sectionsUncheckedCreateInput.schema';

export const shop_sectionsCreateOneSchema: z.ZodType<Prisma.shop_sectionsCreateArgs> = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), data: z.union([shop_sectionsCreateInputObjectSchema, shop_sectionsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.shop_sectionsCreateArgs>;

export const shop_sectionsCreateOneZodSchema = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), data: z.union([shop_sectionsCreateInputObjectSchema, shop_sectionsUncheckedCreateInputObjectSchema]) }).strict();