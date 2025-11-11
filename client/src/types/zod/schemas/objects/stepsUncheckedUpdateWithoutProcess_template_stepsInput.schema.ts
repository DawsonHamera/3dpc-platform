import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectSchema as NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectSchema } from './NullableEnumsteps_step_typeFieldUpdateOperationsInput.schema';
import { error_reportsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema as error_reportsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema } from './error_reportsUncheckedUpdateManyWithoutStepsNestedInput.schema';
import { process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema as process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema } from './process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInput.schema';
import { step_actionsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema as step_actionsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema } from './step_actionsUncheckedUpdateManyWithoutStepsNestedInput.schema';
import { step_contentUncheckedUpdateManyWithoutStepsNestedInputObjectSchema as step_contentUncheckedUpdateManyWithoutStepsNestedInputObjectSchema } from './step_contentUncheckedUpdateManyWithoutStepsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_critical: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  step_type: z.union([steps_step_typeSchema, z.lazy(() => NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_required: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  error_reports: z.lazy(() => error_reportsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema).optional(),
  process_instance_steps: z.lazy(() => process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema).optional(),
  step_actions: z.lazy(() => step_actionsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema).optional(),
  step_content: z.lazy(() => step_contentUncheckedUpdateManyWithoutStepsNestedInputObjectSchema).optional()
}).strict();
export const stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.stepsUncheckedUpdateWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUncheckedUpdateWithoutProcess_template_stepsInput>;
export const stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
