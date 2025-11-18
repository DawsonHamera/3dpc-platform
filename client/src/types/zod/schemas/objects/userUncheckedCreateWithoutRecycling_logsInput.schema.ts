import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema as attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './attendanceUncheckedCreateNestedManyWithoutUserInput.schema';
import { eventUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema as eventUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './eventUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema as fileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './fileUncheckedCreateNestedManyWithoutUploaderInput.schema';
import { activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema as activity_logUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './activity_logUncheckedCreateNestedManyWithoutUserInput.schema';
import { point_logUncheckedCreateNestedManyWithoutUserInputObjectSchema as point_logUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './point_logUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  password_hash: z.string(),
  role_id: z.number().int().optional(),
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
  pointLogs: z.lazy(() => point_logUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const userUncheckedCreateWithoutRecycling_logsInputObjectSchema: z.ZodType<Prisma.userUncheckedCreateWithoutRecycling_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedCreateWithoutRecycling_logsInput>;
export const userUncheckedCreateWithoutRecycling_logsInputObjectZodSchema = makeSchema();
