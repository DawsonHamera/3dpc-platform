import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  grade: grades_gradeSchema,
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const gradesUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.gradesUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesUncheckedCreateWithoutUsersInput>;
export const gradesUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
