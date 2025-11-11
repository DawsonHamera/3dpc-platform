import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { stepsUpdateOneWithoutError_reportsNestedInputObjectSchema as stepsUpdateOneWithoutError_reportsNestedInputObjectSchema } from './stepsUpdateOneWithoutError_reportsNestedInput.schema';
import { tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema as tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema } from './tasksUpdateOneRequiredWithoutError_reportsNestedInput.schema'

const makeSchema = () => z.object({
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image_url: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  steps: z.lazy(() => stepsUpdateOneWithoutError_reportsNestedInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema).optional()
}).strict();
export const error_reportsUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateWithoutUsersInput>;
export const error_reportsUpdateWithoutUsersInputObjectZodSchema = makeSchema();
