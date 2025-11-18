import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { userUpdateOneRequiredWithoutPointLogsNestedInputObjectSchema as userUpdateOneRequiredWithoutPointLogsNestedInputObjectSchema } from './userUpdateOneRequiredWithoutPointLogsNestedInput.schema'

const makeSchema = () => z.object({
  change: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logged_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => userUpdateOneRequiredWithoutPointLogsNestedInputObjectSchema).optional()
}).strict();
export const point_logUpdateInputObjectSchema: z.ZodType<Prisma.point_logUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logUpdateInput>;
export const point_logUpdateInputObjectZodSchema = makeSchema();
