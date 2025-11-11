import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesIncludeObjectSchema as gradesIncludeObjectSchema } from './objects/gradesInclude.schema';
import { gradesOrderByWithRelationInputObjectSchema as gradesOrderByWithRelationInputObjectSchema } from './objects/gradesOrderByWithRelationInput.schema';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './objects/gradesWhereInput.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './objects/gradesWhereUniqueInput.schema';
import { GradesScalarFieldEnumSchema } from './enums/GradesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const gradesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.gradesSelect> = z.object({
    id: z.boolean().optional(),
    grade: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.gradesSelect>;

export const gradesFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    grade: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const gradesFindFirstOrThrowSchema: z.ZodType<Prisma.gradesFindFirstOrThrowArgs> = z.object({ select: gradesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => gradesIncludeObjectSchema.optional()), orderBy: z.union([gradesOrderByWithRelationInputObjectSchema, gradesOrderByWithRelationInputObjectSchema.array()]).optional(), where: gradesWhereInputObjectSchema.optional(), cursor: gradesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GradesScalarFieldEnumSchema, GradesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.gradesFindFirstOrThrowArgs>;

export const gradesFindFirstOrThrowZodSchema = z.object({ select: gradesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => gradesIncludeObjectSchema.optional()), orderBy: z.union([gradesOrderByWithRelationInputObjectSchema, gradesOrderByWithRelationInputObjectSchema.array()]).optional(), where: gradesWhereInputObjectSchema.optional(), cursor: gradesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GradesScalarFieldEnumSchema, GradesScalarFieldEnumSchema.array()]).optional() }).strict();