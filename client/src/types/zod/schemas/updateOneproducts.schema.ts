import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsSelectObjectSchema as productsSelectObjectSchema } from './objects/productsSelect.schema';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './objects/productsInclude.schema';
import { productsUpdateInputObjectSchema as productsUpdateInputObjectSchema } from './objects/productsUpdateInput.schema';
import { productsUncheckedUpdateInputObjectSchema as productsUncheckedUpdateInputObjectSchema } from './objects/productsUncheckedUpdateInput.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './objects/productsWhereUniqueInput.schema';

export const productsUpdateOneSchema: z.ZodType<Prisma.productsUpdateArgs> = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), data: z.union([productsUpdateInputObjectSchema, productsUncheckedUpdateInputObjectSchema]), where: productsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.productsUpdateArgs>;

export const productsUpdateOneZodSchema = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), data: z.union([productsUpdateInputObjectSchema, productsUncheckedUpdateInputObjectSchema]), where: productsWhereUniqueInputObjectSchema }).strict();