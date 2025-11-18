import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema as attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './attendanceUncheckedCreateNestedManyWithoutUserInput.schema';
import { eventUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema as eventUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './eventUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema as fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './fileUncheckedCreateNestedManyWithoutUploaderInput.schema';
import { activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema as activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './activity_logUncheckedCreateNestedManyWithoutUserInput.schema';
import { point_logUncheckedCreateNestedManyWithoutUserInputObjectSchema as point_logUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './point_logUncheckedCreateNestedManyWithoutUserInput.schema';
import { recycling_logUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema as recycling_logUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './recycling_logUncheckedCreateNestedManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  grade: gradeSchema.optional(),
  points: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  events: z.lazy(() => eventUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  files: z.lazy(() => fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  pointLogs: z.lazy(() => point_logUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  recycling_logs: z.lazy(() => recycling_logUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema).optional()
}).strict();
export const userUncheckedCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.userUncheckedCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedCreateWithoutRoleInput>;
export const userUncheckedCreateWithoutRoleInputObjectZodSchema = makeSchema();
