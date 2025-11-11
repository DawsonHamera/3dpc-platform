import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  location: z.literal(true).optional(),
  start_time: z.literal(true).optional(),
  end_time: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  is_featured: z.literal(true).optional(),
  event_type: z.literal(true).optional(),
  created_by: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  verification_code: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EventsCountAggregateInputObjectSchema: z.ZodType<Prisma.EventsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventsCountAggregateInputType>;
export const EventsCountAggregateInputObjectZodSchema = makeSchema();
