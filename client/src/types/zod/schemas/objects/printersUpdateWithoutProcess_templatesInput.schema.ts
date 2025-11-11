import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { filesUpdateOneWithoutPrintersNestedInputObjectSchema as filesUpdateOneWithoutPrintersNestedInputObjectSchema } from './filesUpdateOneWithoutPrintersNestedInput.schema';
import { materialsUpdateOneWithoutPrintersNestedInputObjectSchema as materialsUpdateOneWithoutPrintersNestedInputObjectSchema } from './materialsUpdateOneWithoutPrintersNestedInput.schema';
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
  files: z.lazy(() => filesUpdateOneWithoutPrintersNestedInputObjectSchema).optional(),
  materials: z.lazy(() => materialsUpdateOneWithoutPrintersNestedInputObjectSchema).optional(),
  printer_statuses: z.lazy(() => printer_statusesUpdateOneRequiredWithoutPrintersNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUpdateManyWithoutPrintersNestedInputObjectSchema).optional()
}).strict();
export const printersUpdateWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.printersUpdateWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateWithoutProcess_templatesInput>;
export const printersUpdateWithoutProcess_templatesInputObjectZodSchema = makeSchema();
