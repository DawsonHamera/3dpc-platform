import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsSelectObjectSchema as productsSelectObjectSchema } from './objects/productsSelect.schema';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './objects/productsInclude.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './objects/productsWhereUniqueInput.schema';

export const productsDeleteOneSchema: z.ZodType<Prisma.productsDeleteArgs> = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.productsDeleteArgs>;

export const productsDeleteOneZodSchema = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema }).strict();