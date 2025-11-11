import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { events_event_typeSchema } from '../enums/events_event_type.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string().max(255),
  description: z.string(),
  location: z.string().max(255),
  start_time: z.coerce.date(),
  end_time: z.coerce.date(),
  image_file_id: z.number().int().optional().nullable(),
  is_featured: z.boolean().optional().nullable(),
  event_type: events_event_typeSchema.optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  verification_code: z.string().max(255)
}).strict();
export const eventsCreateManyUsersInputObjectSchema: z.ZodType<Prisma.eventsCreateManyUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateManyUsersInput>;
export const eventsCreateManyUsersInputObjectZodSchema = makeSchema();
