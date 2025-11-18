import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceCreateNestedManyWithoutUserInputObjectSchema as attendanceCreateNestedManyWithoutUserInputObjectSchema } from './attendanceCreateNestedManyWithoutUserInput.schema';
import { eventCreateNestedManyWithoutCreated_byInputObjectSchema as eventCreateNestedManyWithoutCreated_byInputObjectSchema } from './eventCreateNestedManyWithoutCreated_byInput.schema';
import { fileCreateNestedManyWithoutUploaderInputObjectSchema as fileCreateNestedManyWithoutUploaderInputObjectSchema } from './fileCreateNestedManyWithoutUploaderInput.schema';
import { roleCreateNestedOneWithoutUsersInputObjectSchema as roleCreateNestedOneWithoutUsersInputObjectSchema } from './roleCreateNestedOneWithoutUsersInput.schema';
import { activity_logCreateNestedManyWithoutUserInputObjectSchema as activity_logCreateNestedManyWithoutUserInputObjectSchema } from './activity_logCreateNestedManyWithoutUserInput.schema';
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
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceCreateNestedManyWithoutUserInputObjectSchema),
  events: z.lazy(() => eventCreateNestedManyWithoutCreated_byInputObjectSchema),
  files: z.lazy(() => fileCreateNestedManyWithoutUploaderInputObjectSchema),
  role: z.lazy(() => roleCreateNestedOneWithoutUsersInputObjectSchema),
  activity_logs: z.lazy(() => activity_logCreateNestedManyWithoutUserInputObjectSchema),
  pointLogs: z.lazy(() => point_logCreateNestedManyWithoutUserInputObjectSchema),
  recycling_logs: z.lazy(() => recycling_logCreateNestedManyWithoutCreated_byInputObjectSchema)
}).strict();
export const userCreateInputObjectSchema: z.ZodType<Prisma.userCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateInput>;
export const userCreateInputObjectZodSchema = makeSchema();
