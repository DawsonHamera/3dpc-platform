import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { events_event_typeSchema } from '../enums/events_event_type.schema'

const makeSchema = () => z.object({
  set: events_event_typeSchema.optional()
}).strict();
export const NullableEnumevents_event_typeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumevents_event_typeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumevents_event_typeFieldUpdateOperationsInput>;
export const NullableEnumevents_event_typeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
