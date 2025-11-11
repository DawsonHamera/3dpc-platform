import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './objects/gradesWhereInput.schema';

export const gradesDeleteManySchema: z.ZodType<Prisma.gradesDeleteManyArgs> = z.object({ where: gradesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.gradesDeleteManyArgs>;

export const gradesDeleteManyZodSchema = z.object({ where: gradesWhereInputObjectSchema.optional() }).strict();