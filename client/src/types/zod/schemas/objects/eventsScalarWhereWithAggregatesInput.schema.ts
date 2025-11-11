import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { Enumevents_event_typeNullableWithAggregatesFilterObjectSchema as Enumevents_event_typeNullableWithAggregatesFilterObjectSchema } from './Enumevents_event_typeNullableWithAggregatesFilter.schema';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const eventsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => eventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => eventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => eventsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => eventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => eventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  start_time: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  end_time: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  image_file_id: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  is_featured: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  event_type: z.union([z.lazy(() => Enumevents_event_typeNullableWithAggregatesFilterObjectSchema), events_event_typeSchema]).optional().nullable(),
  created_by: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  verification_code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional()
}).strict();
export const eventsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.eventsScalarWhereWithAggregatesInput> = eventsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.eventsScalarWhereWithAggregatesInput>;
export const eventsScalarWhereWithAggregatesInputObjectZodSchema = eventsscalarwherewithaggregatesinputSchema;
