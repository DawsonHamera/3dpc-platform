import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { attendanceCreateNestedManyWithoutEventInputObjectSchema as attendanceCreateNestedManyWithoutEventInputObjectSchema } from './attendanceCreateNestedManyWithoutEventInput.schema';
import { fileCreateNestedOneWithoutEventsInputObjectSchema as fileCreateNestedOneWithoutEventsInputObjectSchema } from './fileCreateNestedOneWithoutEventsInput.schema'

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
  files: z.lazy(() => fileCreateNestedOneWithoutEventsInputObjectSchema).optional()
}).strict();
export const eventCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateWithoutUsersInput>;
export const eventCreateWithoutUsersInputObjectZodSchema = makeSchema();
