import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventsCountOutputTypeSelectObjectSchema as EventsCountOutputTypeSelectObjectSchema } from './EventsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EventsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EventsCountOutputTypeArgsObjectSchema = makeSchema();
export const EventsCountOutputTypeArgsObjectZodSchema = makeSchema();
