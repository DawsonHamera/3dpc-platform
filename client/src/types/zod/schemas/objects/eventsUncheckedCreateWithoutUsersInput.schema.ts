import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { events_event_typeSchema } from '../enums/events_event_type.schema';
import { attendancesUncheckedCreateNestedManyWithoutEventInputObjectSchema as attendancesUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './attendancesUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  location: z.string(),
  start_time: z.coerce.date(),
  end_time: z.coerce.date(),
  image_file_id: z.number().int().optional().nullable(),
  is_featured: z.boolean().optional().nullable(),
  event_type: events_event_typeSchema.optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  verification_code: z.string(),
  attendances: z.lazy(() => attendancesUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const eventsUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventsUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUncheckedCreateWithoutUsersInput>;
export const eventsUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
