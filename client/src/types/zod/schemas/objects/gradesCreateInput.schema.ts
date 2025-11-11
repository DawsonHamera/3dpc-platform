import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { usersCreateNestedManyWithoutGradeInputObjectSchema as usersCreateNestedManyWithoutGradeInputObjectSchema } from './usersCreateNestedManyWithoutGradeInput.schema'

const makeSchema = () => z.object({
  grade: grades_gradeSchema,
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  users: z.lazy(() => usersCreateNestedManyWithoutGradeInputObjectSchema)
}).strict();
export const gradesCreateInputObjectSchema: z.ZodType<Prisma.gradesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesCreateInput>;
export const gradesCreateInputObjectZodSchema = makeSchema();
