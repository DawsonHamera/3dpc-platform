import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { process_instance_steps_statusSchema } from '../enums/process_instance_steps_status.schema';
import { Enumprocess_instance_steps_statusFieldUpdateOperationsInputObjectSchema as Enumprocess_instance_steps_statusFieldUpdateOperationsInputObjectSchema } from './Enumprocess_instance_steps_statusFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInputObjectSchema as process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInputObjectSchema } from './process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInput.schema';
import { usersUpdateOneWithoutProcess_instance_stepsNestedInputObjectSchema as usersUpdateOneWithoutProcess_instance_stepsNestedInputObjectSchema } from './usersUpdateOneWithoutProcess_instance_stepsNestedInput.schema'

const makeSchema = () => z.object({
  step_order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([process_instance_steps_statusSchema, z.lazy(() => Enumprocess_instance_steps_statusFieldUpdateOperationsInputObjectSchema)]).optional(),
  started_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  completed_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_required: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  input_data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  output_data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metadata: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  due_date: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  process_instances: z.lazy(() => process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInputObjectSchema).optional(),
  users: z.lazy(() => usersUpdateOneWithoutProcess_instance_stepsNestedInputObjectSchema).optional()
}).strict();
export const process_instance_stepsUpdateWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUpdateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateWithoutStepsInput>;
export const process_instance_stepsUpdateWithoutStepsInputObjectZodSchema = makeSchema();
