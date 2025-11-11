import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectSchema as NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectSchema } from './NullableEnumprocess_templates_categoryFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { printersUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema as printersUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema } from './printersUncheckedUpdateManyWithoutProcess_templatesNestedInput.schema';
import { process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema as process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema } from './process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInput.schema';
import { process_template_stepsUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema as process_template_stepsUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema } from './process_template_stepsUncheckedUpdateManyWithoutProcess_templatesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  version: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  category: z.union([process_templates_categorySchema, z.lazy(() => NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  estimated_duration: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  printers: z.lazy(() => printersUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema).optional()
}).strict();
export const process_templatesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.process_templatesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUncheckedUpdateInput>;
export const process_templatesUncheckedUpdateInputObjectZodSchema = makeSchema();
