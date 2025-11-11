import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesSelectObjectSchema as gradesSelectObjectSchema } from './objects/gradesSelect.schema';
import { gradesIncludeObjectSchema as gradesIncludeObjectSchema } from './objects/gradesInclude.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './objects/gradesWhereUniqueInput.schema';

export const gradesFindUniqueOrThrowSchema: z.ZodType<Prisma.gradesFindUniqueOrThrowArgs> = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), where: gradesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.gradesFindUniqueOrThrowArgs>;

export const gradesFindUniqueOrThrowZodSchema = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), where: gradesWhereUniqueInputObjectSchema }).strict();