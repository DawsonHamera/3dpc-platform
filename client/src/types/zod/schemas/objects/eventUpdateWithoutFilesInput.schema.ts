import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { NullableEnumevents_event_typeFieldUpdateOperationsInputObjectSchema as NullableEnumevents_event_typeFieldUpdateOperationsInputObjectSchema } from './NullableEnumevents_event_typeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { attendanceUpdateManyWithoutEventNestedInputObjectSchema as attendanceUpdateManyWithoutEventNestedInputObjectSchema } from './attendanceUpdateManyWithoutEventNestedInput.schema';
import { userUpdateOneRequiredWithoutEventsNestedInputObjectSchema as userUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from './userUpdateOneRequiredWithoutEventsNestedInput.schema'

const makeSchema = () => z.object({
  title: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  start_time: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  end_time: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  is_featured: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  event_type: z.union([events_event_typeSchema, z.lazy(() => NullableEnumevents_event_typeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verification_code: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  attendances: z.lazy(() => attendanceUpdateManyWithoutEventNestedInputObjectSchema).optional(),
  users: z.lazy(() => userUpdateOneRequiredWithoutEventsNestedInputObjectSchema).optional()
}).strict();
export const eventUpdateWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventUpdateWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateWithoutFilesInput>;
export const eventUpdateWithoutFilesInputObjectZodSchema = makeSchema();
