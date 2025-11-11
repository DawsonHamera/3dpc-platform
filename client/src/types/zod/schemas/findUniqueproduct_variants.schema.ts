import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { product_variantsSelectObjectSchema as product_variantsSelectObjectSchema } from './objects/product_variantsSelect.schema';
import { product_variantsIncludeObjectSchema as product_variantsIncludeObjectSchema } from './objects/product_variantsInclude.schema';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './objects/product_variantsWhereUniqueInput.schema';

export const product_variantsFindUniqueSchema: z.ZodType<Prisma.product_variantsFindUniqueArgs> = z.object({ select: product_variantsSelectObjectSchema.optional(), include: product_variantsIncludeObjectSchema.optional(), where: product_variantsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.product_variantsFindUniqueArgs>;

export const product_variantsFindUniqueZodSchema = z.object({ select: product_variantsSelectObjectSchema.optional(), include: product_variantsIncludeObjectSchema.optional(), where: product_variantsWhereUniqueInputObjectSchema }).strict();