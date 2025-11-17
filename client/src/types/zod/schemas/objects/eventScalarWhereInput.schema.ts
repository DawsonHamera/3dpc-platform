import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { Enumevents_event_typeNullableFilterObjectSchema as Enumevents_event_typeNullableFilterObjectSchema } from './Enumevents_event_typeNullableFilter.schema';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const eventscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => eventScalarWhereInputObjectSchema), z.lazy(() => eventScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => eventScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => eventScalarWhereInputObjectSchema), z.lazy(() => eventScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  start_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  end_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  image_file_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  is_featured: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  event_type: z.union([z.lazy(() => Enumevents_event_typeNullableFilterObjectSchema), events_event_typeSchema]).optional().nullable(),
  created_by: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  verification_code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const eventScalarWhereInputObjectSchema: z.ZodType<Prisma.eventScalarWhereInput> = eventscalarwhereinputSchema as unknown as z.ZodType<Prisma.eventScalarWhereInput>;
export const eventScalarWhereInputObjectZodSchema = eventscalarwhereinputSchema;
