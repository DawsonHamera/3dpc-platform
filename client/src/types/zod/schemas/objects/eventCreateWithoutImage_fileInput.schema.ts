import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { attendanceCreateNestedManyWithoutEventInputObjectSchema as attendanceCreateNestedManyWithoutEventInputObjectSchema } from './attendanceCreateNestedManyWithoutEventInput.schema';
import { userCreateNestedOneWithoutEventsInputObjectSchema as userCreateNestedOneWithoutEventsInputObjectSchema } from './userCreateNestedOneWithoutEventsInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(255),
  description: z.string(),
  location: z.string().max(255),
  start_time: z.coerce.date(),
  end_time: z.coerce.date(),
  is_featured: z.boolean().optional().nullable(),
  event_type: events_event_typeSchema.optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  verification_code: z.string().max(255),
  attendances: z.lazy(() => attendanceCreateNestedManyWithoutEventInputObjectSchema).optional(),
  created_by: z.lazy(() => userCreateNestedOneWithoutEventsInputObjectSchema).optional()
}).strict();
export const eventCreateWithoutImage_fileInputObjectSchema: z.ZodType<Prisma.eventCreateWithoutImage_fileInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateWithoutImage_fileInput>;
export const eventCreateWithoutImage_fileInputObjectZodSchema = makeSchema();
