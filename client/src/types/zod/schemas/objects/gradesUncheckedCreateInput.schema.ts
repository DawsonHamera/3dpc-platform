import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { usersUncheckedCreateNestedManyWithoutGradeInputObjectSchema as usersUncheckedCreateNestedManyWithoutGradeInputObjectSchema } from './usersUncheckedCreateNestedManyWithoutGradeInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  grade: grades_gradeSchema,
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  users: z.lazy(() => usersUncheckedCreateNestedManyWithoutGradeInputObjectSchema)
}).strict();
export const gradesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.gradesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesUncheckedCreateInput>;
export const gradesUncheckedCreateInputObjectZodSchema = makeSchema();
