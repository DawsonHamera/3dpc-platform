import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './eventsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => eventsWhereInputObjectSchema).optional(),
  some: z.lazy(() => eventsWhereInputObjectSchema).optional(),
  none: z.lazy(() => eventsWhereInputObjectSchema).optional()
}).strict();
export const EventsListRelationFilterObjectSchema: z.ZodType<Prisma.EventsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventsListRelationFilter>;
export const EventsListRelationFilterObjectZodSchema = makeSchema();
