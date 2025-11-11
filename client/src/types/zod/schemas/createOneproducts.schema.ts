import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsSelectObjectSchema as productsSelectObjectSchema } from './objects/productsSelect.schema';
import { productsIncludeObjectSchema as productsIncludeObjectSchema } from './objects/productsInclude.schema';
import { productsCreateInputObjectSchema as productsCreateInputObjectSchema } from './objects/productsCreateInput.schema';
import { productsUncheckedCreateInputObjectSchema as productsUncheckedCreateInputObjectSchema } from './objects/productsUncheckedCreateInput.schema';

export const productsCreateOneSchema: z.ZodType<Prisma.productsCreateArgs> = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), data: z.union([productsCreateInputObjectSchema, productsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.productsCreateArgs>;

export const productsCreateOneZodSchema = z.object({ select: productsSelectObjectSchema.optional(), include: productsIncludeObjectSchema.optional(), data: z.union([productsCreateInputObjectSchema, productsUncheckedCreateInputObjectSchema]) }).strict();