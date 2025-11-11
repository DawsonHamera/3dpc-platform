import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './objects/productsWhereInput.schema';

export const productsDeleteManySchema: z.ZodType<Prisma.productsDeleteManyArgs> = z.object({ where: productsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.productsDeleteManyArgs>;

export const productsDeleteManyZodSchema = z.object({ where: productsWhereInputObjectSchema.optional() }).strict();