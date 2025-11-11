import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsUpdateManyMutationInputObjectSchema as productsUpdateManyMutationInputObjectSchema } from './objects/productsUpdateManyMutationInput.schema';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './objects/productsWhereInput.schema';

export const productsUpdateManySchema: z.ZodType<Prisma.productsUpdateManyArgs> = z.object({ data: productsUpdateManyMutationInputObjectSchema, where: productsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.productsUpdateManyArgs>;

export const productsUpdateManyZodSchema = z.object({ data: productsUpdateManyMutationInputObjectSchema, where: productsWhereInputObjectSchema.optional() }).strict();