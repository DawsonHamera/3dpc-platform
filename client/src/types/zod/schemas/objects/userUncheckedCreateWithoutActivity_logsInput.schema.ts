import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema as attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './attendanceUncheckedCreateNestedManyWithoutUserInput.schema';
import { eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema as eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './eventUncheckedCreateNestedManyWithoutUsersInput.schema';
import { fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema as fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './fileUncheckedCreateNestedManyWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  role_id: z.number().int().optional(),
  grade: gradeSchema.optional(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  events: z.lazy(() => eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  files: z.lazy(() => fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema).optional()
}).strict();
export const userUncheckedCreateWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.userUncheckedCreateWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedCreateWithoutActivity_logsInput>;
export const userUncheckedCreateWithoutActivity_logsInputObjectZodSchema = makeSchema();
