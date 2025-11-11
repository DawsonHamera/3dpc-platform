import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './objects/shop_sectionsWhereInput.schema';

export const shop_sectionsDeleteManySchema: z.ZodType<Prisma.shop_sectionsDeleteManyArgs> = z.object({ where: shop_sectionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.shop_sectionsDeleteManyArgs>;

export const shop_sectionsDeleteManyZodSchema = z.object({ where: shop_sectionsWhereInputObjectSchema.optional() }).strict();