import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { gradeSchema } from '../enums/grade.schema';
import { EnumgradeFieldUpdateOperationsInputObjectSchema as EnumgradeFieldUpdateOperationsInputObjectSchema } from './EnumgradeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { eventUpdateManyWithoutUsersNestedInputObjectSchema as eventUpdateManyWithoutUsersNestedInputObjectSchema } from './eventUpdateManyWithoutUsersNestedInput.schema';
import { fileUpdateManyWithoutUploaderNestedInputObjectSchema as fileUpdateManyWithoutUploaderNestedInputObjectSchema } from './fileUpdateManyWithoutUploaderNestedInput.schema';
import { roleUpdateOneRequiredWithoutUsersNestedInputObjectSchema as roleUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './roleUpdateOneRequiredWithoutUsersNestedInput.schema';
import { activity_logUpdateManyWithoutUserNestedInputObjectSchema as activity_logUpdateManyWithoutUserNestedInputObjectSchema } from './activity_logUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  grade: z.union([gradeSchema, z.lazy(() => EnumgradeFieldUpdateOperationsInputObjectSchema)]).optional(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  last_active: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  events: z.lazy(() => eventUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  files: z.lazy(() => fileUpdateManyWithoutUploaderNestedInputObjectSchema).optional(),
  role: z.lazy(() => roleUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const userUpdateWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.userUpdateWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateWithoutAttendancesInput>;
export const userUpdateWithoutAttendancesInputObjectZodSchema = makeSchema();
