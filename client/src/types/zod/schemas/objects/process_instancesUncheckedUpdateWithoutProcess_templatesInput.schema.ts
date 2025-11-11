import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { Enumprocess_instances_statusFieldUpdateOperationsInputObjectSchema as Enumprocess_instances_statusFieldUpdateOperationsInputObjectSchema } from './Enumprocess_instances_statusFieldUpdateOperationsInput.schema';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { Enumprocess_instances_priorityFieldUpdateOperationsInputObjectSchema as Enumprocess_instances_priorityFieldUpdateOperationsInputObjectSchema } from './Enumprocess_instances_priorityFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema as process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema } from './process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInput.schema';
import { process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema as process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema } from './process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInput.schema';
import { tasksUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema as tasksUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema } from './tasksUncheckedUpdateManyWithoutProcess_instancesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([process_instances_statusSchema, z.lazy(() => Enumprocess_instances_statusFieldUpdateOperationsInputObjectSchema)]).optional(),
  priority: z.union([process_instances_prioritySchema, z.lazy(() => Enumprocess_instances_priorityFieldUpdateOperationsInputObjectSchema)]).optional(),
  assigned_user_id: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  process_instance_steps: z.lazy(() => process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema).optional(),
  process_logs: z.lazy(() => process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema).optional()
}).strict();
export const process_instancesUncheckedUpdateWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_instancesUncheckedUpdateWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUncheckedUpdateWithoutProcess_templatesInput>;
export const process_instancesUncheckedUpdateWithoutProcess_templatesInputObjectZodSchema = makeSchema();
