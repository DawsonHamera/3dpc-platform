import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsUpdateManyMutationInputObjectSchema as materialsUpdateManyMutationInputObjectSchema } from './objects/materialsUpdateManyMutationInput.schema';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './objects/materialsWhereInput.schema';

export const materialsUpdateManySchema: z.ZodType<Prisma.materialsUpdateManyArgs> = z.object({ data: materialsUpdateManyMutationInputObjectSchema, where: materialsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.materialsUpdateManyArgs>;

export const materialsUpdateManyZodSchema = z.object({ data: materialsUpdateManyMutationInputObjectSchema, where: materialsWhereInputObjectSchema.optional() }).strict();