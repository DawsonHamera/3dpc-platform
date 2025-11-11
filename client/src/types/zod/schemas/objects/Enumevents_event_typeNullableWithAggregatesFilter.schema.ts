import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { NestedEnumevents_event_typeNullableWithAggregatesFilterObjectSchema as NestedEnumevents_event_typeNullableWithAggregatesFilterObjectSchema } from './NestedEnumevents_event_typeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumevents_event_typeNullableFilterObjectSchema as NestedEnumevents_event_typeNullableFilterObjectSchema } from './NestedEnumevents_event_typeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: events_event_typeSchema.optional().nullable(),
  in: events_event_typeSchema.array().optional().nullable(),
  notIn: events_event_typeSchema.array().optional().nullable(),
  not: z.union([events_event_typeSchema, z.lazy(() => NestedEnumevents_event_typeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumevents_event_typeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumevents_event_typeNullableFilterObjectSchema).optional()
}).strict();
export const Enumevents_event_typeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumevents_event_typeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumevents_event_typeNullableWithAggregatesFilter>;
export const Enumevents_event_typeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
