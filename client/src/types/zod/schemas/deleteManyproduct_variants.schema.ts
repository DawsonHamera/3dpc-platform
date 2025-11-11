import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { product_variantsWhereInputObjectSchema as product_variantsWhereInputObjectSchema } from './objects/product_variantsWhereInput.schema';

export const product_variantsDeleteManySchema: z.ZodType<Prisma.product_variantsDeleteManyArgs> = z.object({ where: product_variantsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.product_variantsDeleteManyArgs>;

export const product_variantsDeleteManyZodSchema = z.object({ where: product_variantsWhereInputObjectSchema.optional() }).strict();