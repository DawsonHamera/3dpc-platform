import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { product_variantsSelectObjectSchema as product_variantsSelectObjectSchema } from './objects/product_variantsSelect.schema';
import { product_variantsIncludeObjectSchema as product_variantsIncludeObjectSchema } from './objects/product_variantsInclude.schema';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './objects/product_variantsWhereUniqueInput.schema';
import { product_variantsCreateInputObjectSchema as product_variantsCreateInputObjectSchema } from './objects/product_variantsCreateInput.schema';
import { product_variantsUncheckedCreateInputObjectSchema as product_variantsUncheckedCreateInputObjectSchema } from './objects/product_variantsUncheckedCreateInput.schema';
import { product_variantsUpdateInputObjectSchema as product_variantsUpdateInputObjectSchema } from './objects/product_variantsUpdateInput.schema';
import { product_variantsUncheckedUpdateInputObjectSchema as product_variantsUncheckedUpdateInputObjectSchema } from './objects/product_variantsUncheckedUpdateInput.schema';

export const product_variantsUpsertOneSchema: z.ZodType<Prisma.product_variantsUpsertArgs> = z.object({ select: product_variantsSelectObjectSchema.optional(), include: product_variantsIncludeObjectSchema.optional(), where: product_variantsWhereUniqueInputObjectSchema, create: z.union([ product_variantsCreateInputObjectSchema, product_variantsUncheckedCreateInputObjectSchema ]), update: z.union([ product_variantsUpdateInputObjectSchema, product_variantsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.product_variantsUpsertArgs>;

export const product_variantsUpsertOneZodSchema = z.object({ select: product_variantsSelectObjectSchema.optional(), include: product_variantsIncludeObjectSchema.optional(), where: product_variantsWhereUniqueInputObjectSchema, create: z.union([ product_variantsCreateInputObjectSchema, product_variantsUncheckedCreateInputObjectSchema ]), update: z.union([ product_variantsUpdateInputObjectSchema, product_variantsUncheckedUpdateInputObjectSchema ]) }).strict();