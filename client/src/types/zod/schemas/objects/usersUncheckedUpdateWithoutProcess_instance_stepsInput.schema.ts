import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { attendancesUncheckedUpdateManyWithoutUserNestedInputObjectSchema as attendancesUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './attendancesUncheckedUpdateManyWithoutUserNestedInput.schema';
import { error_reportsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as error_reportsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './error_reportsUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { eventsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as eventsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './eventsUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { filesUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema as filesUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema } from './filesUncheckedUpdateManyWithoutUploaderNestedInput.schema';
import { point_logsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as point_logsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './point_logsUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { process_instancesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as process_instancesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './process_instancesUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { process_logsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as process_logsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './process_logsUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { tasksUncheckedUpdateManyWithoutUsersNestedInputObjectSchema as tasksUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './tasksUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { activity_logsUncheckedUpdateManyWithoutUserNestedInputObjectSchema as activity_logsUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './activity_logsUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  grade_id: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  last_active: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attendances: z.lazy(() => attendancesUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  error_reports: z.lazy(() => error_reportsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  events: z.lazy(() => eventsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  files: z.lazy(() => filesUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema).optional(),
  point_logs: z.lazy(() => point_logsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logsUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUncheckedUpdateWithoutProcess_instance_stepsInput>;
export const usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
