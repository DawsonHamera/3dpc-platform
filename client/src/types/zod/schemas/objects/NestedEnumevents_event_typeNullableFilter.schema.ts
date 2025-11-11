import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { events_event_typeSchema } from '../enums/events_event_type.schema'

const nestedenumevents_event_typenullablefilterSchema = z.object({
  equals: events_event_typeSchema.optional().nullable(),
  in: events_event_typeSchema.array().optional().nullable(),
  notIn: events_event_typeSchema.array().optional().nullable(),
  not: z.union([events_event_typeSchema, z.lazy(() => NestedEnumevents_event_typeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumevents_event_typeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumevents_event_typeNullableFilter> = nestedenumevents_event_typenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumevents_event_typeNullableFilter>;
export const NestedEnumevents_event_typeNullableFilterObjectZodSchema = nestedenumevents_event_typenullablefilterSchema;
