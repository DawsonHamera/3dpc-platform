import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceCreateNestedManyWithoutUserInputObjectSchema as attendanceCreateNestedManyWithoutUserInputObjectSchema } from './attendanceCreateNestedManyWithoutUserInput.schema';
import { eventCreateNestedManyWithoutUsersInputObjectSchema as eventCreateNestedManyWithoutUsersInputObjectSchema } from './eventCreateNestedManyWithoutUsersInput.schema';
import { fileCreateNestedManyWithoutUploaderInputObjectSchema as fileCreateNestedManyWithoutUploaderInputObjectSchema } from './fileCreateNestedManyWithoutUploaderInput.schema';
import { roleCreateNestedOneWithoutUsersInputObjectSchema as roleCreateNestedOneWithoutUsersInputObjectSchema } from './roleCreateNestedOneWithoutUsersInput.schema';
import { activity_logCreateNestedManyWithoutUserInputObjectSchema as activity_logCreateNestedManyWithoutUserInputObjectSchema } from './activity_logCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  grade: gradeSchema.optional(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceCreateNestedManyWithoutUserInputObjectSchema),
  events: z.lazy(() => eventCreateNestedManyWithoutUsersInputObjectSchema),
  files: z.lazy(() => fileCreateNestedManyWithoutUploaderInputObjectSchema),
  role: z.lazy(() => roleCreateNestedOneWithoutUsersInputObjectSchema),
  activity_logs: z.lazy(() => activity_logCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const userCreateInputObjectSchema: z.ZodType<Prisma.userCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateInput>;
export const userCreateInputObjectZodSchema = makeSchema();
