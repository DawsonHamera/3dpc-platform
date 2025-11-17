import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumgradeFilterObjectSchema as EnumgradeFilterObjectSchema } from './EnumgradeFilter.schema';
import { gradeSchema } from '../enums/grade.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { AttendanceListRelationFilterObjectSchema as AttendanceListRelationFilterObjectSchema } from './AttendanceListRelationFilter.schema';
import { EventListRelationFilterObjectSchema as EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';
import { FileListRelationFilterObjectSchema as FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema';
import { RoleScalarRelationFilterObjectSchema as RoleScalarRelationFilterObjectSchema } from './RoleScalarRelationFilter.schema';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './roleWhereInput.schema';
import { Activity_logListRelationFilterObjectSchema as Activity_logListRelationFilterObjectSchema } from './Activity_logListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => userWhereInputObjectSchema), z.lazy(() => userWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => userWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => userWhereInputObjectSchema), z.lazy(() => userWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  password_hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  role_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  grade: z.union([z.lazy(() => EnumgradeFilterObjectSchema), gradeSchema]).optional(),
  score: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  last_active: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  attendances: z.lazy(() => AttendanceListRelationFilterObjectSchema).optional(),
  events: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
  files: z.lazy(() => FileListRelationFilterObjectSchema).optional(),
  role: z.union([z.lazy(() => RoleScalarRelationFilterObjectSchema), z.lazy(() => roleWhereInputObjectSchema)]).optional(),
  activity_logs: z.lazy(() => Activity_logListRelationFilterObjectSchema).optional()
}).strict();
export const userWhereInputObjectSchema: z.ZodType<Prisma.userWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.userWhereInput>;
export const userWhereInputObjectZodSchema = userwhereinputSchema;
