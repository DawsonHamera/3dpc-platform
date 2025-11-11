import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesUpdateManyMutationInputObjectSchema as gradesUpdateManyMutationInputObjectSchema } from './objects/gradesUpdateManyMutationInput.schema';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './objects/gradesWhereInput.schema';

export const gradesUpdateManySchema: z.ZodType<Prisma.gradesUpdateManyArgs> = z.object({ data: gradesUpdateManyMutationInputObjectSchema, where: gradesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.gradesUpdateManyArgs>;

export const gradesUpdateManyZodSchema = z.object({ data: gradesUpdateManyMutationInputObjectSchema, where: gradesWhereInputObjectSchema.optional() }).strict();