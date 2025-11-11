import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema';
import { NullableEnumstep_actions_button_styleFieldUpdateOperationsInputObjectSchema as NullableEnumstep_actions_button_styleFieldUpdateOperationsInputObjectSchema } from './NullableEnumstep_actions_button_styleFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { step_triggersUncheckedUpdateManyWithoutStep_actionsNestedInputObjectSchema as step_triggersUncheckedUpdateManyWithoutStep_actionsNestedInputObjectSchema } from './step_triggersUncheckedUpdateManyWithoutStep_actionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  step_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  action_order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action_config: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  button_style: z.union([step_actions_button_styleSchema, z.lazy(() => NullableEnumstep_actions_button_styleFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  icon: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_enabled: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  confirmation_message: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  step_triggers: z.lazy(() => step_triggersUncheckedUpdateManyWithoutStep_actionsNestedInputObjectSchema).optional()
}).strict();
export const step_actionsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.step_actionsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUncheckedUpdateInput>;
export const step_actionsUncheckedUpdateInputObjectZodSchema = makeSchema();
