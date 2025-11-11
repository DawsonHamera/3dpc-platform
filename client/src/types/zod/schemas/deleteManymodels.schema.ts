import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './objects/modelsWhereInput.schema';

export const modelsDeleteManySchema: z.ZodType<Prisma.modelsDeleteManyArgs> = z.object({ where: modelsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.modelsDeleteManyArgs>;

export const modelsDeleteManyZodSchema = z.object({ where: modelsWhereInputObjectSchema.optional() }).strict();