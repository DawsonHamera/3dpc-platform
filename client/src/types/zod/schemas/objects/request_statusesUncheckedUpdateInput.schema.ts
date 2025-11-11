import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { requestsUncheckedUpdateManyWithoutRequest_statusesNestedInputObjectSchema as requestsUncheckedUpdateManyWithoutRequest_statusesNestedInputObjectSchema } from './requestsUncheckedUpdateManyWithoutRequest_statusesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  requests: z.lazy(() => requestsUncheckedUpdateManyWithoutRequest_statusesNestedInputObjectSchema).optional()
}).strict();
export const request_statusesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.request_statusesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesUncheckedUpdateInput>;
export const request_statusesUncheckedUpdateInputObjectZodSchema = makeSchema();
