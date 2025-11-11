import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema'

const makeSchema = () => z.object({
  grade: grades_gradeSchema,
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const gradesCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.gradesCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesCreateWithoutUsersInput>;
export const gradesCreateWithoutUsersInputObjectZodSchema = makeSchema();
