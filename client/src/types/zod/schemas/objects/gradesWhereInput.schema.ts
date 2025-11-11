import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumgrades_gradeFilterObjectSchema as Enumgrades_gradeFilterObjectSchema } from './Enumgrades_gradeFilter.schema';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UsersListRelationFilterObjectSchema as UsersListRelationFilterObjectSchema } from './UsersListRelationFilter.schema'

const gradeswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => gradesWhereInputObjectSchema), z.lazy(() => gradesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => gradesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => gradesWhereInputObjectSchema), z.lazy(() => gradesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  grade: z.union([z.lazy(() => Enumgrades_gradeFilterObjectSchema), grades_gradeSchema]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  users: z.lazy(() => UsersListRelationFilterObjectSchema).optional()
}).strict();
export const gradesWhereInputObjectSchema: z.ZodType<Prisma.gradesWhereInput> = gradeswhereinputSchema as unknown as z.ZodType<Prisma.gradesWhereInput>;
export const gradesWhereInputObjectZodSchema = gradeswhereinputSchema;
