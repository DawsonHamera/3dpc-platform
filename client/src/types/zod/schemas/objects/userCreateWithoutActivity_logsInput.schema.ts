import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { attendanceCreateNestedManyWithoutUserInputObjectSchema as attendanceCreateNestedManyWithoutUserInputObjectSchema } from './attendanceCreateNestedManyWithoutUserInput.schema';
import { eventCreateNestedManyWithoutUsersInputObjectSchema as eventCreateNestedManyWithoutUsersInputObjectSchema } from './eventCreateNestedManyWithoutUsersInput.schema';
import { fileCreateNestedManyWithoutUploaderInputObjectSchema as fileCreateNestedManyWithoutUploaderInputObjectSchema } from './fileCreateNestedManyWithoutUploaderInput.schema';
import { roleCreateNestedOneWithoutUsersInputObjectSchema as roleCreateNestedOneWithoutUsersInputObjectSchema } from './roleCreateNestedOneWithoutUsersInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  grade: gradeSchema.optional(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  attendances: z.lazy(() => attendanceCreateNestedManyWithoutUserInputObjectSchema).optional(),
  events: z.lazy(() => eventCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  files: z.lazy(() => fileCreateNestedManyWithoutUploaderInputObjectSchema).optional(),
  role: z.lazy(() => roleCreateNestedOneWithoutUsersInputObjectSchema).optional()
}).strict();
export const userCreateWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.userCreateWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateWithoutActivity_logsInput>;
export const userCreateWithoutActivity_logsInputObjectZodSchema = makeSchema();
