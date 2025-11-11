import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { product_variantsSelectObjectSchema as product_variantsSelectObjectSchema } from './objects/product_variantsSelect.schema';
import { product_variantsIncludeObjectSchema as product_variantsIncludeObjectSchema } from './objects/product_variantsInclude.schema';
import { product_variantsUpdateInputObjectSchema as product_variantsUpdateInputObjectSchema } from './objects/product_variantsUpdateInput.schema';
import { product_variantsUncheckedUpdateInputObjectSchema as product_variantsUncheckedUpdateInputObjectSchema } from './objects/product_variantsUncheckedUpdateInput.schema';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './objects/product_variantsWhereUniqueInput.schema';

export const product_variantsUpdateOneSchema: z.ZodType<Prisma.product_variantsUpdateArgs> = z.object({ select: product_variantsSelectObjectSchema.optional(), include: product_variantsIncludeObjectSchema.optional(), data: z.union([product_variantsUpdateInputObjectSchema, product_variantsUncheckedUpdateInputObjectSchema]), where: product_variantsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.product_variantsUpdateArgs>;

export const product_variantsUpdateOneZodSchema = z.object({ select: product_variantsSelectObjectSchema.optional(), include: product_variantsIncludeObjectSchema.optional(), data: z.union([product_variantsUpdateInputObjectSchema, product_variantsUncheckedUpdateInputObjectSchema]), where: product_variantsWhereUniqueInputObjectSchema }).strict();