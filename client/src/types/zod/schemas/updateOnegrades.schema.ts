import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesSelectObjectSchema as gradesSelectObjectSchema } from './objects/gradesSelect.schema';
import { gradesIncludeObjectSchema as gradesIncludeObjectSchema } from './objects/gradesInclude.schema';
import { gradesUpdateInputObjectSchema as gradesUpdateInputObjectSchema } from './objects/gradesUpdateInput.schema';
import { gradesUncheckedUpdateInputObjectSchema as gradesUncheckedUpdateInputObjectSchema } from './objects/gradesUncheckedUpdateInput.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './objects/gradesWhereUniqueInput.schema';

export const gradesUpdateOneSchema: z.ZodType<Prisma.gradesUpdateArgs> = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), data: z.union([gradesUpdateInputObjectSchema, gradesUncheckedUpdateInputObjectSchema]), where: gradesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.gradesUpdateArgs>;

export const gradesUpdateOneZodSchema = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), data: z.union([gradesUpdateInputObjectSchema, gradesUncheckedUpdateInputObjectSchema]), where: gradesWhereUniqueInputObjectSchema }).strict();