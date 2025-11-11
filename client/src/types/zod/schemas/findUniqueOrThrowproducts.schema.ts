import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsSelectObjectSchema as productsSelectObjectSchema } from './objects/productsSelect.schema';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './objects/productsInclude.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './objects/productsWhereUniqueInput.schema';

export const productsFindUniqueOrThrowSchema: z.ZodType<Prisma.productsFindUniqueOrThrowArgs> = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.productsFindUniqueOrThrowArgs>;

export const productsFindUniqueOrThrowZodSchema = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema }).strict();