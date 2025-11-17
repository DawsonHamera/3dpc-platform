import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema as attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './attendanceUncheckedCreateNestedManyWithoutUserInput.schema';
import { eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema as eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './eventUncheckedCreateNestedManyWithoutUsersInput.schema';
import { fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema as fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './fileUncheckedCreateNestedManyWithoutUploaderInput.schema';
import { activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema as activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './activity_logUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  role_id: z.number().int().optional(),
  grade: gradeSchema.optional(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  events: z.lazy(() => eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  files: z.lazy(() => fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema),
  activity_logs: z.lazy(() => activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const userUncheckedCreateInputObjectSchema: z.ZodType<Prisma.userUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedCreateInput>;
export const userUncheckedCreateInputObjectZodSchema = makeSchema();
