import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './objects/materialsWhereInput.schema';

export const materialsDeleteManySchema: z.ZodType<Prisma.materialsDeleteManyArgs> = z.object({ where: materialsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.materialsDeleteManyArgs>;

export const materialsDeleteManyZodSchema = z.object({ where: materialsWhereInputObjectSchema.optional() }).strict();