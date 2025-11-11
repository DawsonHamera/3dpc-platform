import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { product_variantsUpdateManyMutationInputObjectSchema as product_variantsUpdateManyMutationInputObjectSchema } from './objects/product_variantsUpdateManyMutationInput.schema';
import { product_variantsWhereInputObjectSchema as product_variantsWhereInputObjectSchema } from './objects/product_variantsWhereInput.schema';

export const product_variantsUpdateManySchema: z.ZodType<Prisma.product_variantsUpdateManyArgs> = z.object({ data: product_variantsUpdateManyMutationInputObjectSchema, where: product_variantsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.product_variantsUpdateManyArgs>;

export const product_variantsUpdateManyZodSchema = z.object({ data: product_variantsUpdateManyMutationInputObjectSchema, where: product_variantsWhereInputObjectSchema.optional() }).strict();