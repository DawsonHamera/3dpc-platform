import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { Enumprocess_instances_statusFieldUpdateOperationsInputObjectSchema as Enumprocess_instances_statusFieldUpdateOperationsInputObjectSchema } from './Enumprocess_instances_statusFieldUpdateOperationsInput.schema';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { Enumprocess_instances_priorityFieldUpdateOperationsInputObjectSchema as Enumprocess_instances_priorityFieldUpdateOperationsInputObjectSchema } from './Enumprocess_instances_priorityFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInputObjectSchema as process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInputObjectSchema } from './process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInput.schema';
import { usersUpdateOneWithoutProcess_instancesNestedInputObjectSchema as usersUpdateOneWithoutProcess_instancesNestedInputObjectSchema } from './usersUpdateOneWithoutProcess_instancesNestedInput.schema';
import { process_logsUpdateManyWithoutProcess_instancesNestedInputObjectSchema as process_logsUpdateManyWithoutProcess_instancesNestedInputObjectSchema } from './process_logsUpdateManyWithoutProcess_instancesNestedInput.schema';
import { tasksUpdateManyWithoutProcess_instancesNestedInputObjectSchema as tasksUpdateManyWithoutProcess_instancesNestedInputObjectSchema } from './tasksUpdateManyWithoutProcess_instancesNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([process_instances_statusSchema, z.lazy(() => Enumprocess_instances_statusFieldUpdateOperationsInputObjectSchema)]).optional(),
  priority: z.union([process_instances_prioritySchema, z.lazy(() => Enumprocess_instances_priorityFieldUpdateOperationsInputObjectSchema)]).optional(),
  current_step_order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  estimated_duration: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  actual_duration: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  started_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  completed_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  due_date: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metadata: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  process_templates: z.lazy(() => process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInputObjectSchema).optional(),
  users: z.lazy(() => usersUpdateOneWithoutProcess_instancesNestedInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsUpdateManyWithoutProcess_instancesNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUpdateManyWithoutProcess_instancesNestedInputObjectSchema).optional()
}).strict();
export const process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateWithoutProcess_instance_stepsInput>;
export const process_instancesUpdateWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
