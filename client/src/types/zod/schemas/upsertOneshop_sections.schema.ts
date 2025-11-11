import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsSelectObjectSchema as shop_sectionsSelectObjectSchema } from './objects/shop_sectionsSelect.schema';
import { shop_sectionsIncludeObjectSchema as shop_sectionsIncludeObjectSchema } from './objects/shop_sectionsInclude.schema';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './objects/shop_sectionsWhereUniqueInput.schema';
import { shop_sectionsCreateInputObjectSchema as shop_sectionsCreateInputObjectSchema } from './objects/shop_sectionsCreateInput.schema';
import { shop_sectionsUncheckedCreateInputObjectSchema as shop_sectionsUncheckedCreateInputObjectSchema } from './objects/shop_sectionsUncheckedCreateInput.schema';
import { shop_sectionsUpdateInputObjectSchema as shop_sectionsUpdateInputObjectSchema } from './objects/shop_sectionsUpdateInput.schema';
import { shop_sectionsUncheckedUpdateInputObjectSchema as shop_sectionsUncheckedUpdateInputObjectSchema } from './objects/shop_sectionsUncheckedUpdateInput.schema';

export const shop_sectionsUpsertOneSchema: z.ZodType<Prisma.shop_sectionsUpsertArgs> = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), where: shop_sectionsWhereUniqueInputObjectSchema, create: z.union([ shop_sectionsCreateInputObjectSchema, shop_sectionsUncheckedCreateInputObjectSchema ]), update: z.union([ shop_sectionsUpdateInputObjectSchema, shop_sectionsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.shop_sectionsUpsertArgs>;

export const shop_sectionsUpsertOneZodSchema = z.object({ select: shop_sectionsSelectObjectSchema.optional(), include: shop_sectionsIncludeObjectSchema.optional(), where: shop_sectionsWhereUniqueInputObjectSchema, create: z.union([ shop_sectionsCreateInputObjectSchema, shop_sectionsUncheckedCreateInputObjectSchema ]), update: z.union([ shop_sectionsUpdateInputObjectSchema, shop_sectionsUncheckedUpdateInputObjectSchema ]) }).strict();