import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectSchema as NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectSchema } from './NullableEnumprocess_templates_categoryFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { printersUpdateManyWithoutProcess_templatesNestedInputObjectSchema as printersUpdateManyWithoutProcess_templatesNestedInputObjectSchema } from './printersUpdateManyWithoutProcess_templatesNestedInput.schema';
import { process_template_stepsUpdateManyWithoutProcess_templatesNestedInputObjectSchema as process_template_stepsUpdateManyWithoutProcess_templatesNestedInputObjectSchema } from './process_template_stepsUpdateManyWithoutProcess_templatesNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  version: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  category: z.union([process_templates_categorySchema, z.lazy(() => NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  estimated_duration: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  printers: z.lazy(() => printersUpdateManyWithoutProcess_templatesNestedInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsUpdateManyWithoutProcess_templatesNestedInputObjectSchema).optional()
}).strict();
export const process_templatesUpdateWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_templatesUpdateWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpdateWithoutProcess_instancesInput>;
export const process_templatesUpdateWithoutProcess_instancesInputObjectZodSchema = makeSchema();
