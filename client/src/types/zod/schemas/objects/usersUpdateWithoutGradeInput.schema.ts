import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { attendancesUpdateManyWithoutUserNestedInputObjectSchema as attendancesUpdateManyWithoutUserNestedInputObjectSchema } from './attendancesUpdateManyWithoutUserNestedInput.schema';
import { error_reportsUpdateManyWithoutUsersNestedInputObjectSchema as error_reportsUpdateManyWithoutUsersNestedInputObjectSchema } from './error_reportsUpdateManyWithoutUsersNestedInput.schema';
import { eventsUpdateManyWithoutUsersNestedInputObjectSchema as eventsUpdateManyWithoutUsersNestedInputObjectSchema } from './eventsUpdateManyWithoutUsersNestedInput.schema';
import { filesUpdateManyWithoutUploaderNestedInputObjectSchema as filesUpdateManyWithoutUploaderNestedInputObjectSchema } from './filesUpdateManyWithoutUploaderNestedInput.schema';
import { point_logsUpdateManyWithoutUsersNestedInputObjectSchema as point_logsUpdateManyWithoutUsersNestedInputObjectSchema } from './point_logsUpdateManyWithoutUsersNestedInput.schema';
import { process_instance_stepsUpdateManyWithoutUsersNestedInputObjectSchema as process_instance_stepsUpdateManyWithoutUsersNestedInputObjectSchema } from './process_instance_stepsUpdateManyWithoutUsersNestedInput.schema';
import { process_instancesUpdateManyWithoutUsersNestedInputObjectSchema as process_instancesUpdateManyWithoutUsersNestedInputObjectSchema } from './process_instancesUpdateManyWithoutUsersNestedInput.schema';
import { process_logsUpdateManyWithoutUsersNestedInputObjectSchema as process_logsUpdateManyWithoutUsersNestedInputObjectSchema } from './process_logsUpdateManyWithoutUsersNestedInput.schema';
import { tasksUpdateManyWithoutUsersNestedInputObjectSchema as tasksUpdateManyWithoutUsersNestedInputObjectSchema } from './tasksUpdateManyWithoutUsersNestedInput.schema';
import { rolesUpdateOneRequiredWithoutUsersNestedInputObjectSchema as rolesUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './rolesUpdateOneRequiredWithoutUsersNestedInput.schema';
import { activity_logsUpdateManyWithoutUserNestedInputObjectSchema as activity_logsUpdateManyWithoutUserNestedInputObjectSchema } from './activity_logsUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  last_active: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attendances: z.lazy(() => attendancesUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  error_reports: z.lazy(() => error_reportsUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  events: z.lazy(() => eventsUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  files: z.lazy(() => filesUpdateManyWithoutUploaderNestedInputObjectSchema).optional(),
  point_logs: z.lazy(() => point_logsUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  process_instance_steps: z.lazy(() => process_instance_stepsUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logsUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const usersUpdateWithoutGradeInputObjectSchema: z.ZodType<Prisma.usersUpdateWithoutGradeInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateWithoutGradeInput>;
export const usersUpdateWithoutGradeInputObjectZodSchema = makeSchema();
