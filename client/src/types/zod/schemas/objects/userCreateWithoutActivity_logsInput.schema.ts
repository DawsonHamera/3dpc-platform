import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceCreateNestedManyWithoutUserInputObjectSchema as attendanceCreateNestedManyWithoutUserInputObjectSchema } from './attendanceCreateNestedManyWithoutUserInput.schema';
import { eventCreateNestedManyWithoutCreated_byInputObjectSchema as eventCreateNestedManyWithoutCreated_byInputObjectSchema } from './eventCreateNestedManyWithoutCreated_byInput.schema';
import { fileCreateNestedManyWithoutUploaderInputObjectSchema as fileCreateNestedManyWithoutUploaderInputObjectSchema } from './fileCreateNestedManyWithoutUploaderInput.schema';
import { roleCreateNestedOneWithoutUsersInputObjectSchema as roleCreateNestedOneWithoutUsersInputObjectSchema } from './roleCreateNestedOneWithoutUsersInput.schema';
import { point_logCreateNestedManyWithoutUserInputObjectSchema as point_logCreateNestedManyWithoutUserInputObjectSchema } from './point_logCreateNestedManyWithoutUserInput.schema';
import { recycling_logCreateNestedManyWithoutCreated_byInputObjectSchema as recycling_logCreateNestedManyWithoutCreated_byInputObjectSchema } from './recycling_logCreateNestedManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  grade: gradeSchema.optional(),
  points: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceCreateNestedManyWithoutUserInputObjectSchema).optional(),
  events: z.lazy(() => eventCreateNestedManyWithoutCreated_byInputObjectSchema).optional(),
  files: z.lazy(() => fileCreateNestedManyWithoutUploaderInputObjectSchema).optional(),
  role: z.lazy(() => roleCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  pointLogs: z.lazy(() => point_logCreateNestedManyWithoutUserInputObjectSchema).optional(),
  recycling_logs: z.lazy(() => recycling_logCreateNestedManyWithoutCreated_byInputObjectSchema).optional()
}).strict();
export const userCreateWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.userCreateWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateWithoutActivity_logsInput>;
export const userCreateWithoutActivity_logsInputObjectZodSchema = makeSchema();
