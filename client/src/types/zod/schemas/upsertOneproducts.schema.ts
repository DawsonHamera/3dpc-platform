import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsSelectObjectSchema as productsSelectObjectSchema } from './objects/productsSelect.schema';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './objects/productsInclude.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './objects/productsWhereUniqueInput.schema';
import { productsCreateInputObjectSchema as productsCreateInputObjectSchema } from './objects/productsCreateInput.schema';
import { productsUncheckedCreateInputObjectSchema as productsUncheckedCreateInputObjectSchema } from './objects/productsUncheckedCreateInput.schema';
import { productsUpdateInputObjectSchema as productsUpdateInputObjectSchema } from './objects/productsUpdateInput.schema';
import { productsUncheckedUpdateInputObjectSchema as productsUncheckedUpdateInputObjectSchema } from './objects/productsUncheckedUpdateInput.schema';

export const productsUpsertOneSchema: z.ZodType<Prisma.productsUpsertArgs> = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema, create: z.union([ productsCreateInputObjectSchema, productsUncheckedCreateInputObjectSchema ]), update: z.union([ productsUpdateInputObjectSchema, productsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.productsUpsertArgs>;

export const productsUpsertOneZodSchema = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), where: productsWhereUniqueInputObjectSchema, create: z.union([ productsCreateInputObjectSchema, productsUncheckedCreateInputObjectSchema ]), update: z.union([ productsUpdateInputObjectSchema, productsUncheckedUpdateInputObjectSchema ]) }).strict();