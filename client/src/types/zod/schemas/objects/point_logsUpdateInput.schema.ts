import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { usersUpdateOneRequiredWithoutPoint_logsNestedInputObjectSchema as usersUpdateOneRequiredWithoutPoint_logsNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutPoint_logsNestedInput.schema'

const makeSchema = () => z.object({
  change: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logged_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => usersUpdateOneRequiredWithoutPoint_logsNestedInputObjectSchema).optional()
}).strict();
export const point_logsUpdateInputObjectSchema: z.ZodType<Prisma.point_logsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsUpdateInput>;
export const point_logsUpdateInputObjectZodSchema = makeSchema();
