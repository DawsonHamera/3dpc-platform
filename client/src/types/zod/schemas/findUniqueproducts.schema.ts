import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsSelectObjectSchema as productsSelectObjectSchema } from './objects/productsSelect.schema';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './objects/productsInclude.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './objects/productsWhereUniqueInput.schema';

export const productsFindUniqueSchema: z.ZodType<Prisma.productsFindUniqueArgs> = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.productsFindUniqueArgs>;

export const productsFindUniqueZodSchema = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema }).strict();