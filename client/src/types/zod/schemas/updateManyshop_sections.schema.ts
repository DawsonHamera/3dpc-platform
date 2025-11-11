import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsUpdateManyMutationInputObjectSchema as shop_sectionsUpdateManyMutationInputObjectSchema } from './objects/shop_sectionsUpdateManyMutationInput.schema';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './objects/shop_sectionsWhereInput.schema';

export const shop_sectionsUpdateManySchema: z.ZodType<Prisma.shop_sectionsUpdateManyArgs> = z.object({ data: shop_sectionsUpdateManyMutationInputObjectSchema, where: shop_sectionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.shop_sectionsUpdateManyArgs>;

export const shop_sectionsUpdateManyZodSchema = z.object({ data: shop_sectionsUpdateManyMutationInputObjectSchema, where: shop_sectionsWhereInputObjectSchema.optional() }).strict();