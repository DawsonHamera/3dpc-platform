import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { usersUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema as usersUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutError_reportsNestedInput.schema';
import { tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema as tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema } from './tasksUpdateOneRequiredWithoutError_reportsNestedInput.schema'

const makeSchema = () => z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image_url: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  users: z.lazy(() => usersUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema).optional()
}).strict();
export const error_reportsUpdateWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateWithoutStepsInput>;
export const error_reportsUpdateWithoutStepsInputObjectZodSchema = makeSchema();
