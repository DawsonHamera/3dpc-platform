import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { process_templatesUpdateOneWithoutPrintersNestedInputObjectSchema as process_templatesUpdateOneWithoutPrintersNestedInputObjectSchema } from './process_templatesUpdateOneWithoutPrintersNestedInput.schema';
import { filesUpdateOneWithoutPrintersNestedInputObjectSchema as filesUpdateOneWithoutPrintersNestedInputObjectSchema } from './filesUpdateOneWithoutPrintersNestedInput.schema';
import { printer_statusesUpdateOneRequiredWithoutPrintersNestedInputObjectSchema as printer_statusesUpdateOneRequiredWithoutPrintersNestedInputObjectSchema } from './printer_statusesUpdateOneRequiredWithoutPrintersNestedInput.schema';
import { tasksUpdateManyWithoutPrintersNestedInputObjectSchema as tasksUpdateManyWithoutPrintersNestedInputObjectSchema } from './tasksUpdateManyWithoutPrintersNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  owner: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  process_templates: z.lazy(() => process_templatesUpdateOneWithoutPrintersNestedInputObjectSchema).optional(),
  files: z.lazy(() => filesUpdateOneWithoutPrintersNestedInputObjectSchema).optional(),
  printer_statuses: z.lazy(() => printer_statusesUpdateOneRequiredWithoutPrintersNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUpdateManyWithoutPrintersNestedInputObjectSchema).optional()
}).strict();
export const printersUpdateWithoutMaterialsInputObjectSchema: z.ZodType<Prisma.printersUpdateWithoutMaterialsInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateWithoutMaterialsInput>;
export const printersUpdateWithoutMaterialsInputObjectZodSchema = makeSchema();
