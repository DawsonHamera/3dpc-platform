import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { error_reportsUpdateManyWithoutTasksNestedInputObjectSchema as error_reportsUpdateManyWithoutTasksNestedInputObjectSchema } from './error_reportsUpdateManyWithoutTasksNestedInput.schema';
import { usersUpdateOneWithoutTasksNestedInputObjectSchema as usersUpdateOneWithoutTasksNestedInputObjectSchema } from './usersUpdateOneWithoutTasksNestedInput.schema';
import { modelsUpdateOneRequiredWithoutTasksNestedInputObjectSchema as modelsUpdateOneRequiredWithoutTasksNestedInputObjectSchema } from './modelsUpdateOneRequiredWithoutTasksNestedInput.schema';
import { printersUpdateOneWithoutTasksNestedInputObjectSchema as printersUpdateOneWithoutTasksNestedInputObjectSchema } from './printersUpdateOneWithoutTasksNestedInput.schema';
import { requestsUpdateOneRequiredWithoutTasksNestedInputObjectSchema as requestsUpdateOneRequiredWithoutTasksNestedInputObjectSchema } from './requestsUpdateOneRequiredWithoutTasksNestedInput.schema';
import { task_statusesUpdateOneWithoutTasksNestedInputObjectSchema as task_statusesUpdateOneWithoutTasksNestedInputObjectSchema } from './task_statusesUpdateOneWithoutTasksNestedInput.schema'

const makeSchema = () => z.object({
  material_slots: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quality: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  comments: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scheduled_start_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scheduled_end_time: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  error_reports: z.lazy(() => error_reportsUpdateManyWithoutTasksNestedInputObjectSchema).optional(),
  users: z.lazy(() => usersUpdateOneWithoutTasksNestedInputObjectSchema).optional(),
  models: z.lazy(() => modelsUpdateOneRequiredWithoutTasksNestedInputObjectSchema).optional(),
  printers: z.lazy(() => printersUpdateOneWithoutTasksNestedInputObjectSchema).optional(),
  requests: z.lazy(() => requestsUpdateOneRequiredWithoutTasksNestedInputObjectSchema).optional(),
  task_statuses: z.lazy(() => task_statusesUpdateOneWithoutTasksNestedInputObjectSchema).optional()
}).strict();
export const tasksUpdateWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.tasksUpdateWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateWithoutProcess_instancesInput>;
export const tasksUpdateWithoutProcess_instancesInputObjectZodSchema = makeSchema();
