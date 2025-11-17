import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { gradeSchema } from '../enums/grade.schema';
import { EnumgradeFieldUpdateOperationsInputObjectSchema as EnumgradeFieldUpdateOperationsInputObjectSchema } from './EnumgradeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { attendanceUncheckedUpdateManyWithoutUserNestedInputObjectSchema as attendanceUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './attendanceUncheckedUpdateManyWithoutUserNestedInput.schema';
import { eventUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as eventUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './eventUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { fileUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema as fileUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema } from './fileUncheckedUpdateManyWithoutUploaderNestedInput.schema';
import { activity_logUncheckedUpdateManyWithoutUserNestedInputObjectSchema as activity_logUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './activity_logUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  grade: z.union([gradeSchema, z.lazy(() => EnumgradeFieldUpdateOperationsInputObjectSchema)]).optional(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  last_active: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attendances: z.lazy(() => attendanceUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  events: z.lazy(() => eventUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  files: z.lazy(() => fileUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const userUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.userUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedUpdateInput>;
export const userUncheckedUpdateInputObjectZodSchema = makeSchema();
