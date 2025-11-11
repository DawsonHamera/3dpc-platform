import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesSelectObjectSchema as gradesSelectObjectSchema } from './objects/gradesSelect.schema';
import { gradesIncludeObjectSchema as gradesIncludeObjectSchema } from './objects/gradesInclude.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './objects/gradesWhereUniqueInput.schema';
import { gradesCreateInputObjectSchema as gradesCreateInputObjectSchema } from './objects/gradesCreateInput.schema';
import { gradesUncheckedCreateInputObjectSchema as gradesUncheckedCreateInputObjectSchema } from './objects/gradesUncheckedCreateInput.schema';
import { gradesUpdateInputObjectSchema as gradesUpdateInputObjectSchema } from './objects/gradesUpdateInput.schema';
import { gradesUncheckedUpdateInputObjectSchema as gradesUncheckedUpdateInputObjectSchema } from './objects/gradesUncheckedUpdateInput.schema';

export const gradesUpsertOneSchema: z.ZodType<Prisma.gradesUpsertArgs> = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), where: gradesWhereUniqueInputObjectSchema, create: z.union([ gradesCreateInputObjectSchema, gradesUncheckedCreateInputObjectSchema ]), update: z.union([ gradesUpdateInputObjectSchema, gradesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.gradesUpsertArgs>;

export const gradesUpsertOneZodSchema = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), where: gradesWhereUniqueInputObjectSchema, create: z.union([ gradesCreateInputObjectSchema, gradesUncheckedCreateInputObjectSchema ]), update: z.union([ gradesUpdateInputObjectSchema, gradesUncheckedUpdateInputObjectSchema ]) }).strict();