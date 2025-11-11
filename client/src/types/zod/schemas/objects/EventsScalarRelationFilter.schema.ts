import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './eventsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => eventsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => eventsWhereInputObjectSchema).optional()
}).strict();
export const EventsScalarRelationFilterObjectSchema: z.ZodType<Prisma.EventsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventsScalarRelationFilter>;
export const EventsScalarRelationFilterObjectZodSchema = makeSchema();
