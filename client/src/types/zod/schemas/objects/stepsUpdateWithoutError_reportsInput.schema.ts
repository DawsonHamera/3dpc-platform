import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectSchema as NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectSchema } from './NullableEnumsteps_step_typeFieldUpdateOperationsInput.schema';
import { process_instance_stepsUpdateManyWithoutStepsNestedInputObjectSchema as process_instance_stepsUpdateManyWithoutStepsNestedInputObjectSchema } from './process_instance_stepsUpdateManyWithoutStepsNestedInput.schema';
import { process_template_stepsUpdateManyWithoutStepsNestedInputObjectSchema as process_template_stepsUpdateManyWithoutStepsNestedInputObjectSchema } from './process_template_stepsUpdateManyWithoutStepsNestedInput.schema';
import { step_actionsUpdateManyWithoutStepsNestedInputObjectSchema as step_actionsUpdateManyWithoutStepsNestedInputObjectSchema } from './step_actionsUpdateManyWithoutStepsNestedInput.schema';
import { step_contentUpdateManyWithoutStepsNestedInputObjectSchema as step_contentUpdateManyWithoutStepsNestedInputObjectSchema } from './step_contentUpdateManyWithoutStepsNestedInput.schema'

const makeSchema = () => z.object({
  title: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_critical: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  step_type: z.union([steps_step_typeSchema, z.lazy(() => NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_required: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  process_instance_steps: z.lazy(() => process_instance_stepsUpdateManyWithoutStepsNestedInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsUpdateManyWithoutStepsNestedInputObjectSchema).optional(),
  step_actions: z.lazy(() => step_actionsUpdateManyWithoutStepsNestedInputObjectSchema).optional(),
  step_content: z.lazy(() => step_contentUpdateManyWithoutStepsNestedInputObjectSchema).optional()
}).strict();
export const stepsUpdateWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.stepsUpdateWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateWithoutError_reportsInput>;
export const stepsUpdateWithoutError_reportsInputObjectZodSchema = makeSchema();
