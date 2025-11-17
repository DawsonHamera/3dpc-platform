import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema as attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './attendanceUncheckedCreateNestedManyWithoutUserInput.schema';
import { eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema as eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './eventUncheckedCreateNestedManyWithoutUsersInput.schema';
import { fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema as fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './fileUncheckedCreateNestedManyWithoutUploaderInput.schema';
import { activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema as activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './activity_logUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  grade: gradeSchema.optional(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  events: z.lazy(() => eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  files: z.lazy(() => fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const userUncheckedCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.userUncheckedCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedCreateWithoutRoleInput>;
export const userUncheckedCreateWithoutRoleInputObjectZodSchema = makeSchema();
